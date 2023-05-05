import React,{useState} from 'react'
import '../style/SignUpBody.css'
import {Link,useNavigate} from 'react-router-dom'

export default function SignUpBody() {

  const navigate = useNavigate()
  const [credentials, setcredentials] = useState({username:"",fname:"",lname:"",age:"",sex:"",contactno:"",email:"",address:"",fathersName:"",mothersName:"",idNo:"",password:""})

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/createuser",{
    method:'POST',
    headers:{
      'Content-Type' : 'application/json'
    },
    // possible error since age is not string yet initialised to string 
    body:JSON.stringify({username:credentials.name,fname:credentials.fname,lname:credentials.lname,age:credentials.age,sex:credentials.sex,contactno:credentials.contactno,email:credentials.email,address:credentials.address,fathersName:credentials.fathersName,mothersName:credentials.mothersName,idNo:credentials.idNo,password:credentials.password})
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
  }

  const onChange = (event)=>{
    setcredentials({...credentials,[event.target.name] : event.target.value})
  }

  return (
    // points to note:
    // outer <form onSubmit = {handleSubmit}> needed just after the outermost div & in each input element,
    //  add attributes {name="(from line 6)" value={credentials.(respective name) onChange = {onChange}}}
    <div>Sign Up</div>
  )
}
