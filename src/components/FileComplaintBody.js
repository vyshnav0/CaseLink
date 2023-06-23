import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function FileComplaint() {
    
    const userOrOfficer = localStorage.getItem("usertype");
    const authToken = localStorage.getItem("authToken")
    const navigate = useNavigate()
    const callComplaintPage = async() => {
        try {
            console.log("Going to fetch from complaintauth");
            const response = await fetch(`http://localhost:5000/complaintauth?authToken=${authToken}` , 
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
        callComplaintPage()
    }, [])

    const [credentials, setcredentials] = useState({reportedby:"",fname:"",lname:"",age:"",sex:"",contactno:"",email:"",address:"",fathersName:"",mothersName:"",idType:"",idno:"",type:"",location:"",time:"",accused:"",victim:"",description:"",nearestStation:""})

    // if(userOrOfficer == 'user'){
    //     [credentials, setcredentials] = useState({reportedby:"",fname:data.fname,lname:data.lname,age:data.age,sex:data.sex,contactno:data.contactno,email:data.email,address:data.address,fathersName:data.fathersName,mothersName:data.mothersName,idType:data.idType,idNo:data.idno,type:"",location:"",time:"",accused:"",victim:"",description:"",nearestStation:""})
    // }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/createcomplaint",{
        method:'POST',
        headers:{
        'Content-Type' : 'application/json'
        },
        body:JSON.stringify({reportedby:credentials.reportedby,email:credentials.email,idType:credentials.idType,idno:credentials.idno,type:credentials.type,location:credentials.location,time:credentials.time,accused:credentials.accused,victim:credentials.victim,description:credentials.description,nearestStation:credentials.nearestStation})
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

    const createComplaintee = async(e) =>{
        e.preventDefault();
        const complainteeResponse = await fetch("http://localhost:5000/createcomplaintee",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({reportedby:credentials.reportedby,email:credentials.email,idType:credentials.idType,idno:credentials.idno,type:credentials.type,location:credentials.location,time:credentials.time,accused:credentials.accused,victim:credentials.victim,description:credentials.description,nearestStation:credentials.nearestStation})
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

    const onChange = (event)=>{
        setcredentials({...credentials,[event.target.name] : event.target.value})
    }
    return (
        // use variable userOrOfficer in className for the create complaintee button. className = userOrOfficer <other classnames> then in css create two designs one for .user{} and one for .officer{} and make the button display:none in .user{} and style it in .officer{}. Also use it to make other design choices like give input fields of personal data className = userOrData and if user then make fields uneditable. Only the officers have right to create new complaintee. All other logged in users will have their information autofilled IF input field is given the right name from [credentials,setCredentials](refer above code). On the create complaintee button give onClick = {createComplaintee} function given above
        <>Chettayi Coffee</>
  )
}
