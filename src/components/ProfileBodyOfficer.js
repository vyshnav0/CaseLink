import React from 'react'
import '../style/ProfileBody.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import {Link , useNavigate} from 'react-router-dom'

export default function ProfileBodyOfficer() {
  const navigate = useNavigate()
  const logged = localStorage.getItem("usertype");
  const status = logged === "user" || logged === "officer";
  let [officer,pen] = [false,null]
  officer = logged === "officer"
  if(officer){
    pen = JSON.parse(localStorage.getItem("data")).pen
  }

  const data = JSON.parse(localStorage.getItem('data'));
  const name = data.fname + " " + data.lname
  const age = data.age;
  const sex = data.sex;
  const rank = data.rank;
  const contactno = data.contactno;
  const station = data.station;
  const cases = data.opencases;
  const refreshofficer = async()=> {
    try {
      const ref = await fetch('http://localhost:5000/refreshofficer',{
        method:"POST",
        headers:{
          "Content-Type" : "application/json",
          accept : "application/json"
        },
        body:JSON.stringify({pen:pen})
      })

      const res = await ref.json()
      const data = res.data
      localStorage.setItem("data",data)
      console.log("Data refreshed succesfully");
      navigate("/profile")
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
  <div className='pro'>
  <section class="vh-100" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-top h-100">
      <div class="col col-md-9 col-lg-7 col-xl-5">
        <div class="card w">
          <div class="card-body p-4">
            <div class="d-flex text-black">
              <div class="flex-shrink-0">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image" class="img-fluid"/>
              </div>
              <div class="flex-grow-1 ms-3">
                <h2 class="mb-1">{name}</h2>
                <p class="mb-2 pb-1" >Pen : {pen}</p>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div>
                    <p class="small text-muted mb-1">Age</p>
                    <p class="mb-0">{age}</p>
                  </div>
                  <div class="px-3">
                    <p class="small text-muted mb-1">Gender</p>
                    <p class="mb-0">{sex}</p>
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
                    <p class="small text-muted mb-1">Designation</p>
                    <p class="mb-0">{rank}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div>
                    <p class="small text-muted mb-1">Station</p>
                    <p class="mb-0">{station}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div>
                    <p class="small text-muted mb-1">Ongoing Cases</p>
                    <ul>
                    {cases.map((ongoing, i) => (
                    <li key={i}>{ongoing}</li>
                     ))}
                    </ul>
                  </div>
                </div>
                <div class="d-flex pt-1">
                  {officer && <button type="button" onClick={refreshofficer} class="btn btn-outline-primary me-1 flex-grow-1">Refresh</button> }
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
