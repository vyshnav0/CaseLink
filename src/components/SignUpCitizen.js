import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../style/Forms.css'

export default function SignUpCitizen() {

  const navigate = useNavigate()
  const [credentials, setcredentials] = useState({username:"",fname:"",lname:"",age:"",sex:"",contactno:"",email:"",address:"",fathersName:"",mothersName:"",idType:"",idNo:"",password:""})

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/createuser",{
    method:'POST',
    headers:{
      'Content-Type' : 'application/json'
    },
    body:JSON.stringify({username:credentials.username,fname:credentials.fname,lname:credentials.lname,age:credentials.age,sex:credentials.sex,contactno:credentials.contactno,email:credentials.email,address:credentials.address,fathersName:credentials.fathersName,mothersName:credentials.mothersName,idType:credentials.idType,idNo:credentials.idNo,password:credentials.password})
    })
    const json = await response.json()
    console.log(json)

    if(!json.success){
      alert("There was an error in creating User profile")
    }
    if(json.success){
      navigate("/login");
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

    // if (value === 'tab2') {
    //   navigate('/signupofficer'); 
    // }
  };

  return (
    <div class='body-2'>
    <section class="container-2">
    <header>Register</header>
    <form onSubmit={handleSubmit} class="form">
      <div class='column'>
      <div class="input-box">
        <label>First Name</label>
        <input type="text" placeholder="Enter your first name" name='fname'
            value={credentials.fname}
            onChange={onChange}
            required/>
        </div>
        <div class="input-box">
        <label>Last Name</label>
        <input type="text" placeholder="Enter your last name" name='lname'
            value={credentials.lname}
            onChange={onChange}
            required/>
        </div>
        </div>
        <div class="column">
        <div class="input-box">
        <label>Username</label>
        <input type="text" placeholder="Create a username" name='username'
            value={credentials.username}
            onChange={onChange}
            required/>
        </div>
        <div class="input-box">
        <label>Create a Password</label>
        <input type="password" placeholder="Create a password" name='password'
            value={credentials.password}
            onChange={onChange}
            required/>
        </div>
        </div>
              <div class='column'>
              <div class="input-box">
              <label>Age</label>
              <input type="number" placeholder="Enter your age" name="age"
                value={credentials.age}
                onChange={onChange}
                required/>
              </div>
          <div class="gender-box">
          <label class='idtype'>Gender</label>
          <div class="gender-option">
            <div class="gender">
              <input type="radio" id="check-male" name="sex" value='Male' checked={credentials.sex==="Male"} onChange={onChange}/>
              <label for="check-male">Male</label>
            </div>
            <div class="gender">
              <input type="radio" id="check-female" name="sex" value='Female' checked={credentials.sex==="Female"} onChange={onChange}/>
              <label for="check-female">Female</label> 
            </div>
            <div class="gender">
              <input type="radio" id="check-other" name="sex" value='Other' checked={credentials.sex==="Other"} onChange={onChange}/>
              <label for="check-other">Other</label>
            </div>
          </div>
        </div>
              </div>
              <div class='column'>
              <div class="input-box">
              <label>E-mail</label>
              <input type="text" placeholder="Enter your email" name="email"
                value={credentials.email}
                onChange={onChange}
                required/>
              </div>
              <div class="input-box">
              <label>Contact Number</label>
              <input type="text" placeholder="Enter your Contact number" 
                value={credentials.contactno}
                name="contactno"
                onChange={onChange}
                required/>
              </div>
              </div>
              <div class="input-box">
              <label>Address</label>
              <input type="text" placeholder="Enter your address" name="address"
                value={credentials.address}
                onChange={onChange}
                required/>
              </div>
        <div class="column">
        <div class="input-box">
        <label>Father's Name</label>
        <input type="text" placeholder="Enter your Father's name" name="fathersname"
            value={credentials.fathersName}
            onChange={onChange}/>
        </div>
        <div class="input-box">
        <label>Mother's Name</label>
        <input type="text" placeholder="Enter your Mother's name" name="mothersname"
            value={credentials.mothersName}
            onChange={onChange}/>
        </div>
        </div>
        <div class="column">
        <div class="input-box">
        <label>ID Type</label>
        <input type="text" placeholder="Enter your ID type" name="idType"
            value={credentials.idType}
            onChange={onChange}
            required/>
        </div>
            <div class="input-box">
            <label>ID number</label>
            <input type="text" placeholder="Enter your id number" name="idNo"
                value={credentials.idNo}
                onChange={onChange}
                required/>
            </div>
            </div>
        

      
      <button>Sign Up</button>
    </form>
  </section>
  </div>
  )
}
