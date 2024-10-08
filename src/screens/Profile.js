import React, { useState , useEffect , useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ProfileBodyUser from '../components/ProfileBodyUser'
import ProfileBodyOfficer from '../components/ProfileBodyOfficer'

export default function Profile() {

  const navigate = useNavigate()
  const userOrOfficer = localStorage.getItem("usertype");
  const effectRan = useRef(false)
  const callAuthentication = async() => {
    try {
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
    } catch (error) {
        console.log("There was an error in authenticating user");
        navigate("/login");
    }
  }

  useEffect(() => {
    if(effectRan.current === false){
        callAuthentication()
        effectRan.current = true
    }
}, [])
const divStyle = {
  backgroundColor: '#dceefa',
  // Add more styles as needed
}

  return (
    <div >
      <Header></Header>
      {userOrOfficer === "user"? <ProfileBodyUser></ProfileBodyUser> : <ProfileBodyOfficer></ProfileBodyOfficer>}
    </div>
  )
}
