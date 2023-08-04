import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
            navigate("/officer")
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


  return (
    <div>
  <div className='cont'>
    <div className='al'>
    <div className='car'>
      <div class="col-lg-2 custom-height ">
        <div class="card mb-4">
          {/* <div class="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" width='100px'/>
            <p class="text-muted mb-1">{reportedby}</p>
            <div class="d-flex justify-content-center mb-2">
            </div>
          </div> */}
        </div>
      </div>
    </div>
    <div className='pro'>
    <div class="col-lg-10">
        <div class="card mb-4">
          <div class="card-body">
          <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Reported By</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{reportedby}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{email}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">CID</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{cid}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Type</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{type}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Investigated By</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{investigatedby}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Mobile no</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{contactno}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Location</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{location}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Date</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{time}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Accused</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{accused}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Victim</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{victim}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Station</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{nearestStation}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Desciption</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{description}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Status</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {officer && !stat && <button onClick = {takeCase} style={{ backgroundColor: 'blue', color: 'white' , minWidth:'5vw' ,minHeight:'7vh' , maxWidth:'10vw' ,maxHeight:'7vh'}}>Take Case</button>}
  {officer && stat && !valid && <button onClick = {() => alert("This case is already being investigated.")} style={{ backgroundColor: 'blue', color: 'white' , minWidth:'5vw' ,minHeight:'7vh' , maxWidth:'10vw' ,maxHeight:'7vh'}}>Already Taken</button>}
  {officer && stat && valid && <button onClick = {viewCrime} style={{ backgroundColor: 'blue', color: 'white' , minWidth:'5vw' ,minHeight:'7vh' , maxWidth:'10vw' ,maxHeight:'7vh'}}>View Crime</button>}
  {officer && stat && valid && <button onClick = {dropCase} style={{ backgroundColor: 'red', color: 'white' , minWidth:'5vw' ,minHeight:'7vh' , maxWidth:'10vw' ,maxHeight:'7vh'}}>Drop Crime</button>}
  </div>
  </div>
  </div>
  )
}
