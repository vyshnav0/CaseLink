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
    <div className='pro'>
  <section class="vh-100" >
  <div class="container py-5">
    <div class="row d-flex justify-content-center align-items-top ">
      <div class="col col-md-9 col-lg-7 col-xl-5">
        <div class="card">
          <div class="card-body p-4">
            <div class="d-flex text-black">
              <div class="flex-shrink-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image" class="img-fluid"/>
              </div>
              <div class="flex-grow-1 ms-3">
                <h2 class="mb-1">{name}</h2>
                <p class="mb-2 pb-1" >{username}</p>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div class="px-3">
                    <p class="small text-muted mb-1">Gender</p>
                    <p class="mb-0">{sex}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div>
                    <p class="small text-muted mb-1">Email</p>
                    <p class="mb-0">{email}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div>
                    <p class="small text-muted mb-1">Contact Number</p>
                    <p class="mb-0">{contactno}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div>
                    <p class="small text-muted mb-1">Father's Name</p>
                    <p class="mb-0">{fathersName}</p>
                  </div>
                  <div class="px-3">
                    <p class="small text-muted mb-1">Mother's Name</p>
                    <p class="mb-0">{mothersName}</p>
                  </div>
                  </div>
                  <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div>
                    <p class="small text-muted mb-1">Address</p>
                    <p class="mb-0">{address}</p>
                  </div>
                </div>
                <div class="d-flex pt-1">
                  <button type="button" class="btn btn-outline-primary me-1 flex-grow-1">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}
