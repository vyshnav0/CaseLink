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
      const parsedData = JSON.parse(data) //this is how you get object. Now type parsedData.{variablename} to get the users respective data

      if(!json.success){
        alert("Enter valid credentials")
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
      const parsedData = JSON.parse(data) //this is how you get object. Now type parsedData.{variablename} to get the users respective data

      if(!json.success){
        alert("Enter valid credentials")
      }
      if(json.success){
        localStorage.setItem("usertype",userOrOfficer)
        localStorage.setItem("authToken",authToken)
        localStorage.setItem("data",data)
        console.log(localStorage.getItem("usertype"))
        console.log(`Welcome ${userOrOfficer} : ${credentials.email}`)
        navigate("/officer")
      }
    }
  }

  const onChange = (event)=>{
    setcredentials({...credentials,[event.target.name] : event.target.value})
  }
  
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
       
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabsContent>

    {/* <MDBTabsPane show={justifyActive === 'tab1'}> */}

    <MDBInput className='input' wrapperClass='mb-4' label='Email' id='form1' type='text' name = 'email' value = {credentials.email} onChange={onChange}/>
    <MDBInput className='input' wrapperClass='mb-4' label='Password' id='form2' type='password' name = 'password' value = {credentials.password} onChange={onChange}/>

    <div className="d-flex justify-content-between mx-4 mb-4">
    </div>
    <Button className="mb-4 w-100" type='submit'>Sign in</Button>

    <p className="text-center">Not a member? <a href="/signupcitizen">Register</a></p>

    {/* </MDBTabsPane> */}

    </MDBTabsContent>

    </MDBContainer>
    </form>  
    </div>

  )
}
