import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/ComplaintDetailBody.css'

export default function ComplaintDetailBody() {

  const navigate = useNavigate()
  let user = localStorage.getItem("usertype")
  let cdata = localStorage.getItem("cdata")
  const of = JSON.parse(localStorage.getItem("data"))
  const ofname = of.fname + " " + of.lname
  const pen = of.pen
  const parsedData = JSON.parse(cdata)
  const json = parsedData.cdata[0]
  const cid = json.cid;
  const reportedby = json.reportedby;
  const email = json.email;
  const contactno = json.contactno;
  const investigatedby = json.investigatedby
  // const idType = json.idType;
  // const idno = json.idno;
  const type = json.type;
  const location = json.location;
  const time = json.time.toString().slice(0,10);
  const accused = json.accused;
  const victim = json.victim;
  const description = json.description;
  const nearestStation = json.nearestStation;
  const status = json.status;

  const stat = status === 'Open';
  const closed = status === 'Closed';
  const valid = investigatedby == ofname;
  const officer = user === 'officer';

  const takeCase = async() =>{
    try{
      const comp = await fetch("http://localhost:5000/takecase",{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({pen:JSON.parse(localStorage.getItem("data")).pen , cid:cid})
      })
      const res = await comp.json()
      if(res.case == 1){
        try {
          const crime = await fetch('http://localhost:5000/createcrime',{
            method:"POST",
            headers:{
              'Content-Type' : "application/json",
              Accept : "application/json"
            },
            body:JSON.stringify({cid:cid,pen:pen})
          })
    
          const resp = await crime.json()
          console.log(resp);
          if(resp.success){
            console.log("Crime created succesfully");
            navigate("/complaintstatus")
          }
          else{
            console.log("There was an error in creating crimedata");
          }
        }
        catch (error) {
          console.error(error);
        }
      }
      else if(res.case == 0){
        alert("There was an unexcpected error in taking up the case.")
      }
      else if(res.case == 2){
        alert("This case is already being investigated.")
        navigate("/complaintstatus")
      }
    }
    catch(e){
      console.error(e);
    } 
  }

  const viewCrime = async() => {
    try {
      const cr = await fetch(`http://localhost:5000/getcrime?cid=${cid}`,{
        method:"GET",
        headers: {
          "Content-Type" : "application/json",
          Accept : "application/json"
        }
      })
      const crimedata = await cr.json()
      localStorage.setItem("crimedata",JSON.stringify(crimedata.crimedata))
      navigate("/crimedetails")
    }
    catch (error) {
      console.error(error);
    }
  }
  
  const dropCase = async() =>{
    const answer = window.confirm("Are you sure you want to drop the case?")
    if(answer){
      try{
        const comp = await fetch("http://localhost:5000/dropcase",{
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({pen:JSON.parse(localStorage.getItem("data")).pen , cid:cid})
        })
        const res = await comp.json()
        if(res.success){
          alert("Case dropped")
          navigate("/officer")
        }
        else{
          alert("There was an error while dropping case. Please try again later.")
        }
      }
      catch(e){
        console.error(e);
      } 
    }
    else{
      // do nothing
    }
  }


  return (
    <div>
    <div class="container-fluid">
    <div class="row">
      <div class="col-lg-7">
        <div className="cardcomplaint">
        <div class="card mb-4" style={{border:'0'}}>
          <div class="card-body">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td class="text-start"><h6 class='complaint_head'>Complaint Details</h6></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td class='text-muted' colspan="2">Complaint ID</td>
                  <td class="text-end">{cid}</td>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Type</td>
                  <td class="text-end">{type}</td>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Date</td>
                  <td class="text-end">{time}</td>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Location</td>
                  <td class="text-end">{location}</td>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Accused</td>
                  <td class="text-end">{accused}</td>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Victim</td>
                  <td class="text-end">{victim}</td>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Description</td>
                  <td class="text-end">{description}</td>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Status</td>
                  <td class="text-end">{status}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
      <div class="col-lg-4">
      <div className="cardcomplaint">
        <div class="card mb-4" style={{border:'0'}}>
          <div class="card-body">
            <h6 class='complaint_head '>Reported By</h6>
            <p>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Name</p>
                      <p class="mb-0">{reportedby}</p>
            </div>
            </div>
            <div class="d-flex justify-content-start mb-2 ">
            <div class="px-1">
                      <p class="small text-muted mb-1">Email</p>
                      <p class="mb-0">{email}</p>
            </div>
            </div>
            <div class="d-flex justify-content-start  mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1">Contact no:</p>
                      <p class="mb-0">{contactno}</p>
            </div>
            </div>
            </p>
          </div>
        </div>
      </div>
    </div>
      <div class="col-lg-11">
      <div className="cardcomplaint">
        <div class="card mb-4" style={{border:'0'}}>
          <div class="card-body">
            <h6 class='complaint_head'>Investigation Details</h6>
            <p>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Investigated by</p>
                      <p class="mb-0">{investigatedby}</p>
            </div>
            </div>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Station</p>
                      <p class="mb-0">{nearestStation}</p>
            </div>
            </div>
            </p>
            </div>
        </div>
      </div>
      </div>
  
    </div>
    </div>
  <div class="btn1">
  {officer && !stat && !closed && <button onClick={takeCase} class="btn btn-primary me-1 ">Take Case</button> }
  {officer && stat && !valid && <button onClick = {() => {alert("This case is already being investigated.");navigate("/complaintstatus")}} class="btn btn-primary me-1 ">Already Taken</button>}
  {officer && stat && valid && <button onClick = {viewCrime} class="btn btn-primary me-1 ">View Crime</button>}
  {officer && stat && valid && <button onClick = {dropCase} class="btn btn-outline-primary  me-1 " >Drop Crime</button>}
  {officer && closed && <button onClick = {viewCrime} class="btn btn-outline-primary  me-1 " >Show Final Report</button>}
  </div>
  </div>
  )
}
