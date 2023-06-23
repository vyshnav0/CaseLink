import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import {Link,useNavigate} from 'react-router-dom'

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
      console.log(json)
      console.log(response.headers.get('Set-Cookie'));

      if(!json.success){
        alert("Enter valid credentials")
      }
      if(json.success){
        localStorage.setItem("usertype",userOrOfficer);
        localStorage.setItem("authToken",authToken)
        console.log(localStorage.getItem("usertype"));
        navigate("/");
      }
      console.log(`Welcome ${userOrOfficer} : ${credentials.email}`)
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
      console.log(json)

      if(!json.success){
        alert("Enter valid credentials")
      }
      if(json.success){
        localStorage.setItem("usertype",userOrOfficer);
        console.log(localStorage.getItem("usertype"));
        navigate("/");
      }
      console.log(`Welcome ${userOrOfficer} : ${credentials.email}`)
    }
  }

  const onChange = (event)=>{
    setcredentials({...credentials,[event.target.name] : event.target.value})
  }

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
       
         <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

<MDBTabsContent>

  <MDBTabsPane show={justifyActive === 'tab1'}>

    <MDBInput wrapperClass='mb-4' label='Email / Username' id='form1' type='text' name = 'email' value = {credentials.email} onChange={onChange}/>
    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name = 'password' value = {credentials.password} onChange={onChange}/>

    <div className="d-flex justify-content-between mx-4 mb-4">
    </div>
    <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
    <p className="text-center">Not a member? <a href="/signup">Register</a></p>

  </MDBTabsPane>

</MDBTabsContent>

</MDBContainer>
      </form>  
    </div>

  )
}
