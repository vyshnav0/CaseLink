import React from 'react'

export default function CrimeDetailsBody() {

  const crimedata = localStorage.getItem("crimedata")
  const json = JSON.parse(crimedata)
  const [crimeno, cid, casetaken, location, time, type, investigatedby, reportedby, status, criminal, victim] = [json.crimeno,json.cid,json.casetaken.toString().slice(0,10),json.location,json.time.toString().slice(0, 10),json.type,json.investigatedby,json.reportedby,json.status,json.criminal,json.victim];

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
                <p class="mb-0">Crime No</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{crimeno}</p>
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
                <p class="mb-0">Case Taken On</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{casetaken}</p>
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
                <p class="mb-0">Complaint Date</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{time}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Criminals</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{criminal}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Victims</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{victim}</p>
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
  {/* {officer && !stat && <button onClick = {takeCase} style={{ backgroundColor: 'blue', color: 'white' , minWidth:'5vw' ,minHeight:'7vh' , maxWidth:'10vw' ,maxHeight:'7vh'}}>Take Case</button>}
  {officer && stat && !valid && <button onClick = {() => alert("This case is already being investigated.")} style={{ backgroundColor: 'blue', color: 'white' , minWidth:'5vw' ,minHeight:'7vh' , maxWidth:'10vw' ,maxHeight:'7vh'}}>Already Taken</button>}
  {officer && stat && valid && <button onClick = {viewCrime} style={{ backgroundColor: 'blue', color: 'white' , minWidth:'5vw' ,minHeight:'7vh' , maxWidth:'10vw' ,maxHeight:'7vh'}}>View Crime</button>}
  {officer && stat && valid && <button onClick = {dropCase} style={{ backgroundColor: 'red', color: 'white' , minWidth:'5vw' ,minHeight:'7vh' , maxWidth:'10vw' ,maxHeight:'7vh'}}>Drop Crime</button>} */}
  </div>
  </div>
  </div>
  )
}
