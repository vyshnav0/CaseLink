import React from 'react'
import '../style/ProfileBody.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProfileBody() {

  const data = JSON.parse(localStorage.getItem('data'));
  const username = data.username;
  const name = data.fname + " " + data.lname
  const age = data.age;
  const sex = data.sex;
  const contactno = data.contactno;
  const email = data.email;
  const address = data.address;
  const fathersName = data.fathersName;
  const mothersName = data.mothersName;

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
            <p class="text-muted mb-1">{username}</p>
            <div class="d-flex justify-content-center mb-2">
              <button type="button" class="btn btn-outline-primary ">Edit Profile</button>
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
                <p class="mb-0">Address</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{address}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Father's Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{fathersName}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-6">
                <p class="mb-0">Mother's Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{mothersName}</p>
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
