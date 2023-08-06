import React, { useState } from 'react'
import '../style/ComplaintDetailBody.css'
import { MDBTextArea } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'

export default function CrimeDetailsBody() {

  const navigate = useNavigate()
  const crimedata = localStorage.getItem("crimedata")
  const pen = JSON.parse(localStorage.getItem("data")).pen
  const json = JSON.parse(crimedata)
  let [crimeno, cid, casetaken, location, time, type, investigatedby, reportedby, status, criminal, victim , updates] = [json.crimeno,json.cid,json.casetaken.toString().slice(0,10),json.location,json.time.toString().slice(0, 10),json.type,json.investigatedby,json.reportedby,json.status,json.criminal,json.victim,json.updates];
  const [newupdate,setnewupdate] = useState("")
  const closed = status === 'Closed'
  
  const addUpdate = async() => {
    console.log("Button clicked");
    if(newupdate == ''){
      alert("No data found")
    }
    else if(window.confirm("Are you sure you want to add an update to this case?")){
      try {
        const add = await fetch("http://localhost:5000/addupdate",{
          method:"PATCH",
          headers: {
            'Content-Type' : "application/json",
            Accept : "application/json"
          },
          body:JSON.stringify({
            updates : {
              updates : newupdate
            } , 
            crmn : crimeno
          })
        })
  
        const res = await add.json()
        if(res.success){
          navigate("/crimestatus")
        }
        else{
          alert("Couldnt add the new update. Please try again later.")
        }
      }
      catch (error) {
        console.error(error);
      }
    }
  }

  const closeCase = async() => {
    try {
      if(window.confirm(`Are you sure you want to close this case : ${crimeno}`)){
        const close = await fetch("http://localhost:5000/closecase",{
          method:"PATCH",
          headers:{
            "Content-Type" :"application/json",
            Accept : "application/json"
          },
          body:JSON.stringify({
            crimeno : crimeno,
            cid : cid,
            pen : pen,
            crime : {
              $set : {
                status : "Closed",
              },
              $push : {
                updates : `Case closed on ${new Date().toString().slice(0,24)}`
              }
            },
            complaint : {
              $set : {
                status : "Closed",
              }
            },
            officer : {
              $pull : {
                opencases : `${cid}`
              }
            }
          })
        })

        const res = await close.json()
        if(res.success){
          alert(`Crime ${crimeno} closed!`)
          navigate("/crimestatus")
        }
        else{
          alert("There was an error in closing case. Please try again later")
        }
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  const onChange =(event) => {
    setnewupdate(event.target.value)
  }

  return (
  <div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-7">
        <div className="cardcomplaint">
        <div class="card mb-4">
          <div class="card-body">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td class="text-start"><h6 class='complaint_head'>Complaint Details</h6></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td class='text-muted' colspan="2">Complaint Number</td>
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
                  <td class='text-muted' colspan="2">Criminal</td>
                  {/* <td class="text-end">{criminal}</td> */}
                  <p class='text-end'>                 
                  <ul class='list'>
                    {criminal.map((ongoing, i) => (
                    <li key={i}>{ongoing}</li>
                     ))}
                  </ul>
                  </p>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Victim</td>
                  {/* <td class="text-end">{victim}</td> */}
                  <p class='text-end'>
                  <ul class='list'>
                    {victim.map((ongoing, i) => (
                    <li key={i}>{ongoing}</li>
                     ))}
                  </ul>
                  </p>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Case Taken</td>
                  <td class="text-end">{casetaken}</td>
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
        <div class="card mb-4">
          <div class="card-body">
            <h6 class='complaint_head '>Reported By</h6>
            <p>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Name</p>
                      <p class="mb-0">{reportedby}</p>
            </div>
            </div>
            </p>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div class="col-lg-11">
      <div className="cardcomplaint">
        <div class="card mb-4">
          <div class="card-body">
            <h6 class='complaint_head '>Updates</h6>
            <p>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Latest Update</p>
                      <p class="mb-0">{updates[updates.length - 1]}</p>
            </div>
            </div>
            {!closed && 
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Add update</p>
                      <div class="d-flex justify-content-start mb-2">
                        <div class="px-1">
                      <MDBTextArea name="description" id="textAreaExample" rows={4} value={newupdate} onChange={onChange} required />
                      <button onClick={addUpdate} class="btn btn-primary me-1 ">Add new update</button>
                      </div>
                      </div>
            </div>
            </div>}
            </p>
            </div>
        </div>
  
    </div>
      </div>
    </div>
      <div class="col-lg-11">
      <div className="cardcomplaint">
        <div class="card mb-4">
          <div class="card-body">
            <h6 class='complaint_head '>Investigation Details</h6>
            <p>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Investigated by</p>
                      <p class="mb-0">{investigatedby}</p>
            </div>
            </div>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Crime Number</p>
                      <p class="mb-0">{crimeno}</p>
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
  {!closed && <button onClick = {closeCase} class="btn btn-primary me-1 btn-danger">Close case</button>}
  </div>
  </div>
  )
}
