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
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import {Link,useNavigate} from 'react-router-dom'

export default function SignUpBody() {

  const navigate = useNavigate()
  const [credentials, setcredentials] = useState({username:"",fname:"",lname:"",age:"",sex:"",contactno:"",email:"",address:"",fathersName:"",mothersName:"",idType:"",idno:"",password:""})

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/createuser",{
    method:'POST',
    headers:{
      'Content-Type' : 'application/json'
    },
    body:JSON.stringify({username:credentials.username,fname:credentials.fname,lname:credentials.lname,age:credentials.age,sex:credentials.sex,contactno:credentials.contactno,email:credentials.email,address:credentials.address,fathersName:credentials.fathersName,mothersName:credentials.mothersName,idType:credentials.idType,idno:credentials.idno,password:credentials.password})
    })
    const json = await response.json()
    console.log(json)

    if(!json.success){
      alert("Enter valid credentials")
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
  };

  return (
    // points to note:
    // outer <form onSubmit = {handleSubmit}> needed just after the outermost div & in each input element,
    //  add attributes {name="(from line 6)" value={credentials.(respective name) onChange = {onChange}}}
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



      <MDBInput wrapperClass='mb-4' label='First Name' id='fname' type='text' required />
      <MDBInput wrapperClass='mb-4' label='Last Name' id='lname' type='text' required />
  <MDBInput wrapperClass='mb-4' label='Username' id='username' type='text' required />
      <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' required />
      <MDBInput wrapperClass='mb-4' label='Age' id='age' type='text' required />
      <MDBInput wrapperClass='mb-4' label='Sex' id='sex' type='text' required />
      <MDBInput wrapperClass='mb-4' label='Contact No' id='contactno' type='text' required />
      <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' required />
      <MDBInput wrapperClass='mb-4' label='Address' id='address' type='text' required />
      <MDBInput wrapperClass='mb-4' label="Father's Name" id='fathersName' type='text' required={false} />
      <MDBInput wrapperClass='mb-4' label="Mother's Name" id='mothersName' type='text' required={false} />
      <MDBInput wrapperClass='mb-4' label='Aadhaar Number' id='adNo' type='text' required />

<MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

</MDBTabsPane>

<MDBTabsPane show={justifyActive === 'tab2'}>

{/*   <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
  <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
 */}

  <MDBInput wrapperClass='mb-4' label='PEN Number' id='pen' type='text'/>
  <MDBInput wrapperClass='mb-4' label='First Name' id='fname' type='text' required />
<MDBInput wrapperClass='mb-4' label='Last Name' id='lname' type='text' required />
<MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' required />
<MDBInput wrapperClass='mb-4' label='Age' id='age' type='text' required />
<MDBInput wrapperClass='mb-4' label='Sex' id='sex' type='text' required />
<MDBInput wrapperClass='mb-4' label='Rank' id='rank' type='text' required />
<MDBInput wrapperClass='mb-4' label='Contact Number' id='contactno' type='text' required />
<MDBInput wrapperClass='mb-4' label='Station' id='station' type='text' required />


  <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

</MDBTabsPane>

</MDBTabsContent>

</MDBContainer>
    </form>
    </div>
  )
}
