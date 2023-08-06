import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabsContent,
  MDBInput,
}
from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import {NavLink,useNavigate} from 'react-router-dom'
import '../style/LoginBody.css'

export default function LoginBody() {

  const navigate = useNavigate()
  const [credentials, setcredentials] = useState({email:"",password:""})

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const userOrOfficer = credentials.email.includes('@') ? 'user' : 'officer'
    if(userOrOfficer==='user'){
      const response = await fetch("http://localhost:5000/loginuser",{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})
      })

      const json = await response.json()
      const authToken = json.authToken
      const data = json.userData
      console.log(json)

      if(json.case == 1 || json.case == 3){
        alert("Wrong password")
      }
      else if(json.case == 2){
        alert("Wrong credentials")
      }
      if(json.success){
        localStorage.setItem("usertype",userOrOfficer);
        localStorage.setItem("authToken",authToken)
        localStorage.setItem("data",data)
        console.log(localStorage.getItem("usertype"));
        console.log(`Welcome ${userOrOfficer} : ${credentials.email}`)
        navigate("/");
      }
    }
    else{
      const response = await fetch("http://localhost:5000/loginofficer",{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({pen:credentials.email,password:credentials.password})
      })

      const json = await response.json()
      const authToken = json.authToken
      const data = json.userData
      console.log(json)

      if(json.case == 1 || json.case == 3){
        alert("Wrong password")
      }
      else if(json.case == 2){
        alert("Wrong credentials")
      }
      if(json.success){
        localStorage.setItem("usertype",userOrOfficer)
        localStorage.setItem("authToken",authToken)
        localStorage.setItem("data",data)
        console.log(localStorage.getItem("usertype"))
        navigate("/officer")
      }
    }
  }

  const onChange = (event)=>{
    setcredentials({...credentials,[event.target.name] : event.target.value})
  }
  
  return (
  <div class="container">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class='card my-5'>

        <form onSubmit={handleSubmit} class="card-body cardbody-color p-lg-5">

          <div class="text-center">
            <img src="./images/login_icon.png" class="img-fluid profile-image-pic rounded-circle my-3" width="200px" alt="profile"/>
            {/* <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="200px" alt="profile"/> */}
          </div>
          <MDBInput className='form-control' wrapperClass='mb-3' aria-describedby="emailHelp" placeholder='Email' id='form1' type='text' name = 'email' value = {credentials.email} onChange={onChange}/>
          <MDBInput className='form-control' wrapperClass='mb-3' placeholder='Password' id='form2' type='password' name = 'password' value = {credentials.password} onChange={onChange}/>
          <div class="text-center"><button type="submit" class="btn btn-primary me-1 flex-grow-1 w-100 mt-3 mb-5 px-5">Login</button></div>
          <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
            Registered? <a href="/signupcitizen" class="text-dark fw-bold"> Create an
              Account</a>
          </div>
        </form>
      </div>
      </div>
    </div>
  </div>

  )
}
