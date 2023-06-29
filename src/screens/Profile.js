import React, { useState , useEffect , useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ProfileBodyUser from '../components/ProfileBodyUser'
import ProfileBodyOfficer from '../components/ProfileBodyOfficer'

export default function Profile() {

  const navigate = useNavigate()
  const userOrOfficer = localStorage.getItem("usertype");
  const effectRan = useRef(false)
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

  useEffect(() => {
    if(effectRan.current === false){
        callComplaintPage()
        effectRan.current = true
    }
}, [])
const divStyle = {
  backgroundColor: '#dceefa',
  // Add more styles as needed
}

  return (
    <div style={divStyle}>
      <Header></Header>
      {userOrOfficer === "user"? <ProfileBodyUser></ProfileBodyUser> : <ProfileBodyOfficer></ProfileBodyOfficer>}
    </div>
  )
}
