import React, { useEffect } from 'react'

export default function ComplaintDetailBody() {

  let cdata = localStorage.getItem("cdata")
  const parsedData = JSON.parse(cdata)
  const json = parsedData.cdata[0]
  const cid = json.cid;
  const reportedby = json.reportedby;
  const email = json.email;
  const contactno = json.contactno;
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
  
  useEffect(() => {
    return () =>{
      localStorage.removeItem("cdata")
    }
  },[])

  return (
    <div>
  <div className='cont'>
    <div className='al'>
    <div className='car'>
      <div class="col-lg-2 custom-height ">
        <div class="card mb-4">
          <div class="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              class="rounded-circle img-fluid" width='100px'/>
            <p class="text-muted mb-1">{reportedby}</p>
            <div class="d-flex justify-content-center mb-2">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='pro'>
    <div class="col-lg-10">
        <div class="card mb-4">
          <div class="card-body">
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
  </div>
  </div>
  </div>
  )
}
