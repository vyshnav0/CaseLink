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

export default function SignUpOfficer() {

  const navigate = useNavigate()
  const [credentials, setcredentials] = useState({fname:"",lname:"",age:"",sex:"",contactno:"",pen:"",station:"",rank:"",password:""})

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/createofficer",{
    method:'POST',
    headers:{
      'Content-Type' : 'application/json'
    },
    body:JSON.stringify({fname:credentials.fname,lname:credentials.lname,age:credentials.age,sex:credentials.sex,contactno:credentials.contactno,pen:credentials.pen,station:credentials.station,rank:credentials.rank,password:credentials.password})
    })
    const json = await response.json()
    console.log(json)

    if(!json.success){
      alert("There was an error in creating Officer profile")
    }
    if(json.success){
      navigate("/login");
    }
  }

  const onChange = (event)=>{
    setcredentials({...credentials,[event.target.name] : event.target.value})
  }

  const [justifyActive, setJustifyActive] = useState('tab2');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  

  if (value === 'tab1') {
      navigate('/signupcitizen'); 
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

<MDBTabsPane show={justifyActive === 'tab2'}>

  <MDBInput wrapperClass='mb-4' label='First Name' name='fname' type='text' value = {credentials.fname} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Last Name' name='lname' type='text' value = {credentials.lname} onChange={onChange} required />
  <MDBInput wrapperClass='mb-4' label='PEN Number' name='pen' type='text' value = {credentials.pen} onChange={onChange}/>
<MDBInput wrapperClass='mb-4' label='Password' name='password' type='password' value = {credentials.password} onChange={onChange} required />
<MDBInput wrapperClass='mb-4' label='Age' name='age' type='text' value = {credentials.age} onChange={onChange} required />
<MDBInput wrapperClass='mb-4' label='Sex' name='sex' type='text' value = {credentials.sex} onChange={onChange} required />
<MDBInput wrapperClass='mb-4' label='Rank' name='rank' type='text' value = {credentials.rank} onChange={onChange} required />
<MDBInput wrapperClass='mb-4' label='Contact Number' name='contactno' type='text' value = {credentials.contactno} onChange={onChange} required />
<MDBInput wrapperClass='mb-4' label='Station' name='station' type='text' value = {credentials.station} onChange={onChange} required />


  <MDBBtn className="mb-4 w-100 ">Sign up</MDBBtn>


  </MDBTabsPane>

</MDBTabsContent>

</MDBContainer>
    </form>
    </div>
  )
}
