import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabsContent,
  MDBBtn,
  MDBInput,
}
from 'mdb-react-ui-kit';
import {NavLink,useNavigate} from 'react-router-dom'

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

  // const [justifyActive, setJustifyActive] = useState('tab1');;

  // const handleJustifyClick = (value) => {
  //   if (value === justifyActive) {
  //     return;
  //   }

  //   setJustifyActive(value);
  // };
  return (
    <div>
      <form onSubmit={handleSubmit}>
       
         <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

<MDBTabsContent>

  {/* <MDBTabsPane show={justifyActive === 'tab1'}> */}

    <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='text' name = 'email' value = {credentials.email} onChange={onChange}/>
    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name = 'password' value = {credentials.password} onChange={onChange}/>

    <div className="d-flex justify-content-between mx-4 mb-4">
    </div>
    <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
    <p className="text-center">Not a member? <a href="/signupcitizen">Register</a></p>

  {/* </MDBTabsPane> */}

</MDBTabsContent>

</MDBContainer>
      </form>  
    </div>

  )
}
