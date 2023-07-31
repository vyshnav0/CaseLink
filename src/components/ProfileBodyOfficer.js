import React from 'react'
import '../style/ProfileBody.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProfileBodyOfficer() {

  const data = JSON.parse(localStorage.getItem('data'));
  const pen = data.pen
  const name = data.fname + " " + data.lname
  const age = data.age;
  const sex = data.sex;
  const rank = data.rank;
  const contactno = data.contactno;
  const station = data.station;
  const cases = data.opencases;

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
            <h3 class="my-3">{name}</h3>
            <p class="text-muted mb-1">{pen}</p>
            {/* <div class="d-flex justify-content-center mb-2">
              <button type="button" class="btn btn-outline-primary ">Edit Profile</button>
            </div> */}
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
                <p class="mb-0">Pen Number</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{pen}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">age</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{age}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Sex</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{sex}</p>
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
                <p class="mb-0">Designation</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{rank}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Station</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{station}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Ongoing Investigations</p>
              </div>
              <div class="col-sm-9">
                {cases.map((ongoing,index) => (
                  <div class="row">
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{ongoing}</p>
                    </div>
                  </div>
                ))}
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
