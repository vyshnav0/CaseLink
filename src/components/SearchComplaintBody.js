import React,{useRef,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {
  MDBContainer,
  MDBTabsContent,
  MDBInput,
}
from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

export default function SearchComplaintBody() {
  
  const effectRan = useRef(false)
  let cid = ''
  const navigate = useNavigate()

  const callSearchPage = async() => {
    try {
        console.log("Going to fetch from complaintauth");
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
        if(!data.success){
          navigate("/login")
        }
        console.log(data);
        console.log("Returned from fetching comlpaintauth");

    } catch (error) {
        console.log("There was an error in authenticating user");
        navigate("/login");
    }
}

useEffect(() => {
  if(effectRan.current === false){
      callSearchPage()
      effectRan.current = true
  }
}, [])

  const takeCID = async() => {
    try{
      const response = await fetch(`http://localhost:5000/searchcomplaint?cid=${cid}`,{
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      const json = await response.json()
      if(json.cdata[0].email === null){
        alert("Enter a valid complaint id!")
      }
      const jsonString = JSON.stringify(json);
      localStorage.setItem('cdata', jsonString);
      navigate("/complaintdetails")
    }
    catch(err){
      console.error(err);
      alert("Enter a valid complaint id!")
    }
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const cidElement = document.getElementById('form1')
    cid = cidElement.value
    console.log(`Going to fetch the cdata with value ${cid}`);
    takeCID()
  }

  return (
    <div>
         <div className='login'>
        <form onSubmit={handleSubmit}>
       
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabsContent>
        <MDBInput className='input' wrapperClass='mb-4' label='Please Enter the CID of the complaint you want to retreive' id='form1' type='text'/>
        <div className="d-flex justify-content-between mx-4 mb-4">
        </div>
        <Button className="mb-4 w-100" type='submit'>Get Complaint</Button>
        </MDBTabsContent>

        </MDBContainer>
        </form>  
        </div>
    </div>
  )
}
