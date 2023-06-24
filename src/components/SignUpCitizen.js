import React,{useState} from 'react'
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
}
from 'mdb-react-ui-kit';

import {Link,useNavigate} from 'react-router-dom'

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

    if (value === 'tab2') {
      navigate('/signupofficer'); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
       
       <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

<MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
<MDBTabsItem>
  <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
    Register as Citizen
  </MDBTabsLink>
</MDBTabsItem>
<MDBTabsItem>
  <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
    Register as Officer
  </MDBTabsLink>
</MDBTabsItem>
</MDBTabs>

<MDBTabsContent>

<MDBTabsPane show={justifyActive === 'tab1'}>

  {/* <MDBInput wrapperClass='mb-4' label='Email / Username' id='form1' type='text' name = 'email' value = {credentials.email} onChange={onChange}/>
  <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name = 'password' value = {credentials.password} onChange={onChange}/> */}

      <MDBInput wrapperClass='mb-4' label='First Name' name='fname' type='text' value = {credentials.fname} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Last Name' name='lname' type='text' value = {credentials.lname} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Username' name='username' type='text' value = {credentials.username} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Password' name='password' type='password' value = {credentials.password} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Age' name='age' type='text' value = {credentials.age} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Sex' name='sex' type='text' value = {credentials.sex} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Contact No' name='contactno' type='text' value = {credentials.contactno} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Email' name='email' type='email' value = {credentials.email} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Address' name='address' type='text' value = {credentials.address} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label="Father's Name" name='fathersName' type='text' value = {credentials.fathersName} onChange={onChange} required={false} />
      <MDBInput wrapperClass='mb-4' label="Mother's Name" name='mothersName' type='text' value = {credentials.mothersName} onChange={onChange} required={false} />
      <MDBInput wrapperClass='mb-4' label='Card Type' name='idType' type='text' value = {credentials.idType} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Aadhaar Number' name='idNo' type='text' value = {credentials.idNo} onChange={onChange} required />

<MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

</MDBTabsPane>

{/* <MDBTabsPane show={justifyActive === 'tab2'}>

</MDBTabsPane> */}

</MDBTabsContent>

</MDBContainer>
    </form>
    </div>
  )
}
