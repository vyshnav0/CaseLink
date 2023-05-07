import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function FileComplaint() {
    
    const navigate = useNavigate()
    const callComplaintPage = async() => {
        try {
            const response = await fetch("http://localhost:5000/complaintauth" , {
                method:"GET",
                headers:{
                    Accept : "*/*",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });
            const data = await response.json();
            console.log(data);

            if(!response.status(200)){
                console.log("There was an error in authentication")
            }
        } catch (error) {
            navigate("/login");
        }
    }

    useEffect(() => {
        callComplaintPage()
    }, [])

    const [credentials, setcredentials] = useState({reportedby:"",type:"",location:"",time:"",accused:"",victim:"",description:"",nearestStation:""})

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/createcomplaint",{
        method:'POST',
        headers:{
        'Content-Type' : 'application/json'
        },
        body:JSON.stringify({reportedby:credentials.reportedby,type:credentials.type,location:credentials.location,time:credentials.time,accused:credentials.accused,victim:credentials.victim,description:credentials.description,nearestStation:credentials.nearestStation})
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
        <></>
  )
}
