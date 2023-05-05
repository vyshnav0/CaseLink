import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import '../style/LoginBody.css'

export default function LoginBody() {

  const navigate = useNavigate()
  const [credentials, setcredentials] = useState({email:"",password:""})

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const userOrOfficer = credentials.email.includes('@') ? 'user' : 'officer'
    if(userOrOfficer=='user'){
      const response = await fetch("http://localhost:5000/loginuser",{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})
      })

      const json = await response.json()
      console.log(json)

      if(!json.success){
        alert("Enter valid credentials")
      }
      if(json.success){
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"));
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
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
      console.log(`Welcome ${userOrOfficer} : ${credentials.email}`)
    }
  }

  const onChange = (event)=>{
    setcredentials({...credentials,[event.target.name] : event.target.value})
  }
  return (
    // <div> model of how to use form and input attributes
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Email address</label>
    //       <input name = "email" value = {credentials.email} onChange={onChange}></input>
    //     </div>
    //     <div>
    //       <label>Password</label>
    //       <input type = "password" name = "password" value = {credentials.password} onChange={onChange}></input>
    //     </div>
    //     <button>Login</button>
    //   </form>
    // </div>
    <></>
  )
}
