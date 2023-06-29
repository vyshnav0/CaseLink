import React,{useState,useEffect,useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import {
    MDBContainer,
    MDBBtn,
    MDBInput,
    MDBTextArea,
  }
  from 'mdb-react-ui-kit';
  import '../style/FileComplaint.css'

export default function FileComplaint() {
    const effectRan = useRef(false)
    
    let repby,mail,phone,idt,idn = "";
    const userOrOfficer = localStorage.getItem("usertype");
    const data = localStorage.getItem("data")
    const parsedData = JSON.parse(data)
    const navigate = useNavigate()
    const callComplaintPage = async() => {
        try {
            console.log("Going to fetch from complaintauth");
            console.log(`User logged in is: ${userOrOfficer}`);
            const response = await fetch(`http://localhost:5000/complaintauth?authToken=${localStorage.getItem("authToken")}` , 
            {
                method:"GET",
                headers:{
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });
            const data = await response.json();
            console.log(data);
            console.log("Returned from fetching comlpaintauth");


            if(!response.status(200)){
                console.log("There was an error in authentication")
            }
        } catch (error) {
            console.log("There was an error in authenticating user");
            navigate("/login");
        }
    }
    
    if(userOrOfficer === 'user'){        //to autofill data
        repby = parsedData.fname + " " + parsedData.lname
        mail = parsedData.email
        phone = parsedData.contactno
        idt = parsedData.idType
        idn = parsedData.idNo
    }

    useEffect(() => {
        if(effectRan.current === false){
            callComplaintPage()
            effectRan.current = true
        }
    }, [])

    const initialcreds = {
        reportedby:repby,
        email:mail,
        contactno:phone,
        idType:idt,
        idno:idn,
        type:"",
        location:"",
        time:"",
        accused:"",
        victim:"",
        description:"",
        nearestStation:""
    }
    const [credentials, setcredentials] = useState(initialcreds)

    // if(userOrOfficer == 'user'){
    //     [credentials, setcredentials] = useState({reportedby:"",fname:data.fname,lname:data.lname,age:data.age,sex:data.sex,contactno:data.contactno,email:data.email,address:data.address,fathersName:data.fathersName,mothersName:data.mothersName,idType:data.idType,idNo:data.idno,type:"",location:"",time:"",accused:"",victim:"",description:"",nearestStation:""})
    // }

    
    const createComplaintee = async() =>{
        try{
            const complainteeResponse = await fetch("http://localhost:5000/createcomplaintee",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({reportedby:credentials.reportedby,email:credentials.email,contactno:credentials.contactno,idType:credentials.idType,idno:credentials.idno,type:credentials.type,location:credentials.location,time:credentials.time,accused:credentials.accused,victim:credentials.victim,description:credentials.description,nearestStation:credentials.nearestStation})
            })

            const jsonComplaintee = await complainteeResponse.json()
            console.log(jsonComplaintee);

            if(!jsonComplaintee.success){
                alert("There was an error in accepting you data. Please try again.")
            }
            if(jsonComplaintee.success){
                console.log("Created complaintee succesfully");
                //write code to alter css based on complaintee addition maybe remove create complaintee button and automatically move to complaint details page (code for what happens when you switch the tab on top for personal details/complaint details)
            }
        }
        catch(err){
            console.error(err);
        }
    }
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(userOrOfficer === 'officer'){
            console.log("Since officer, going to createcomplaintee");
            createComplaintee()
        }
        const response = await fetch("http://localhost:5000/createcomplaint",{
        method:'POST',
        headers:{
        'Content-Type' : 'application/json'
        },
        body:JSON.stringify({reportedby:credentials.reportedby,email:credentials.email,contactno:credentials.contactno,idType:credentials.idType,idno:credentials.idno,type:credentials.type,location:credentials.location,time:credentials.time,accused:credentials.accused,victim:credentials.victim,description:credentials.description,nearestStation:credentials.nearestStation})
        })
        const json = await response.json()
        console.log(json)

        if(!json.success){
            alert("There was an error in accepting you data. Please try again.")
        }
        if(json.success){
            navigate("/");
        }
    }

    const onChange = (event)=>{
        setcredentials({...credentials,[event.target.name] : event.target.value})
    }
    return (
        // use variable userOrOfficer in className for the create complaintee button. className = userOrOfficer <other classnames> 
        // then in css create two designs one for .user{} and one for .officer{} and make the button display:none in .user{} and style 
        // it in .officer{}. Also use it to make other design choices like give input fields of personal data className = userOrData and 
        // if user then make fields uneditable. Only the officers have right to create new complaintee. All other logged in users will 
        // have their information autofilled IF input field is given the right name from [credentials,setCredentials](refer above code).
        //  On the create complaintee button give onClick = {createComplaintee} function given above
        <>
            <form onSubmit={handleSubmit}>
       
       <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

  <MDBInput wrapperClass='mb-4' label='Reported By' name='reportedby' type='text' value = {credentials.reportedby} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Email' name='email' type='email' value = {credentials.email} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Phone No' name='contactno' type='text' value = {credentials.contactno} onChange={onChange} required />
      <div className="d-flex justify-content-between">
        <MDBInput wrapperClass='mb-4' label='ID Type' name='idType' type='text' value = {credentials.idType} onChange={onChange} required />
        <MDBInput wrapperClass='mb-4' label='ID Number' name='idno' type='number' value = {credentials.idno} onChange={onChange} required />
      </div>
  <MDBInput wrapperClass="mb-4" label="Complaint Type" name="type" type="text" value={credentials.type} onChange={onChange} required />
  

      <div className="d-flex justify-content-between">
      <MDBInput wrapperClass='mb-4' label='Location' name='location' type='text' value = {credentials.location} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Date' name='time' type='date' value = {credentials.time} onChange={onChange} required />
  </div>

      <MDBInput wrapperClass='mb-4' label='Accused' name='accused' type='text' value = {credentials.accused} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Victim' name='victim' type='text' value = {credentials.victim} onChange={onChange} required />
      <MDBInput wrapperClass='mb-4' label='Nearest Station' name='nearestStation' type='text' value = {credentials.nearestStation} onChange={onChange} required />
      {/* <MDBInput wrapperClass='mb-4' label='Description' name='description' type='text'  /> */}
      <MDBTextArea label='Complaint Description' name= 'description' id='textAreaExample' rows={4}  value = {credentials.description} onChange={onChange} required/>

  <MDBBtn className="mb-4 w-100 ">{userOrOfficer === 'user' ? "Submit" : "Create Complaintee and submit"}</MDBBtn>
       </MDBContainer>
    </form>

        </>
  )
}
