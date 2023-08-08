import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../style/FileComplaint.css";

export default function FileComplaint() {
  const effectRan = useRef(false);

  let repby,
    mail,
    phone,
    idt,
    idn = "";
  const userOrOfficer = localStorage.getItem("usertype");
  const off = userOrOfficer === 'officer'
  const usr = userOrOfficer === 'user'
  const data = localStorage.getItem("data");
  const parsedData = JSON.parse(data);
  const navigate = useNavigate();
  const callAuthentication = async () => {
    try {
      console.log(`User logged in is: ${userOrOfficer}`);
      const response = await fetch(
        `http://localhost:5000/complaintauth?authToken=${localStorage.getItem(
          "authToken"
        )}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      if (!data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log("There was an error in authenticating user");
      navigate("/login");
    }
  };

  if (userOrOfficer === "user") {
    //to autofill data
    repby = parsedData.fname + " " + parsedData.lname;
    mail = parsedData.email;
    phone = parsedData.contactno;
    idt = parsedData.idType;
    idn = parsedData.idNo;
  }

  useEffect(() => {
    if (effectRan.current === false) {
      callAuthentication();
      effectRan.current = true;
    }
  }, []);

  const initialcreds = {
    reportedby: repby,
    email: mail,
    contactno: phone,
    idType: idt,
    idno: idn,
    type: "",
    location: "",
    time: "",
    accused: "",
    victim: "",
    description: "",
    nearestStation: "",
  };
  const [credentials, setcredentials] = useState(initialcreds);

  const createComplaintee = async () => {
    try {
      const complainteeResponse = await fetch("http://localhost:5000/createcomplaintee",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reportedby: credentials.reportedby,
            email: credentials.email,
            contactno: credentials.contactno,
            idType: credentials.idType,
            idno: credentials.idno,
            type: credentials.type,
            location: credentials.location,
            time: credentials.time,
            accused: credentials.accused,
            victim: credentials.victim,
            description: credentials.description,
            nearestStation: credentials.nearestStation,
          }),
        }
      );

      const jsonComplaintee = await complainteeResponse.json();
      if (!jsonComplaintee.success) {
        alert("There was an error in accepting you data. Please make sure ID Type and Complaint Type is selected from the dropdown.");
      }
      if (jsonComplaintee.success) {
        console.log("Created complaintee succesfully");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userOrOfficer === "officer") {
      console.log("Since officer, going to createcomplaintee");
      createComplaintee();
    }
    const response = await fetch("http://localhost:5000/createcomplaint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reportedby: credentials.reportedby,
        email: credentials.email,
        contactno: credentials.contactno,
        idType: credentials.idType,
        idno: credentials.idno,
        type: credentials.type,
        location: credentials.location,
        time: credentials.time,
        accused: credentials.accused,
        victim: credentials.victim,
        description: credentials.description,
        nearestStation: credentials.nearestStation,
      }),
    });
    const json = await response.json();
    if(userOrOfficer === 'user'){
      const data = json.userdata
      localStorage.setItem("data",data)
    }

    if (!json.success) {
      alert("There was an error in accepting you data. Please try again.");
    }
    if (json.success) {
      alert(`Please Note your Complaint ID: ${json.cid.cid}`);
      navigate("/");
    }
  };

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return ( 
    <div class='body-2'>
    <section class="container-2">
    <header>File a Complaint</header>
    <form onSubmit={handleSubmit} class="form">
    
      <div class="input-box">
        <label>Reported by</label>
        <input type="text" placeholder="Enter your name" name='reportedby'
            value={credentials.reportedby}
            onChange={onChange}
            required/>
        </div>
        <div class="column">
        <div class="input-box">
        <label>E-mail</label>
        <input type="email" placeholder="Enter your e-mail" name='email'
            value={credentials.email}
            onChange={onChange}
            required/>
        </div>
        <div class="input-box">
        <label>Contact number</label>
        <input type="text" placeholder="Enter your contact number" name='contactno'
            value={credentials.contactno}
            onChange={onChange}
            required/>
        </div>
        </div>
        <div class="column">
        {off&&
        <div>
        <label class='idtype'>ID Type</label>
        <div class='idselect'>
        <div className="select-box">
            <div>
              <select id = 'selectId' class = 'form-select' label="ID Type" name="idType" value={credentials.idType} onChange={onChange}>
                <option>Aadhaar</option>
                <option>Driving License</option>
                <option>Voters ID</option>
              </select>
              </div>
        </div>
        </div>
        </div>}
        {usr &&
        <div class="input-box">
        <label>ID Type</label>
        <input type="text" placeholder="Enter your ID type" name="idType"
            value={credentials.idType}
            onChange={onChange}
            required/>
        </div>}
            <div class="input-box">
            <label>ID number</label>
            <input type="text" placeholder="Enter your id number" name="idno"
                value={credentials.idno}
                onChange={onChange}
                required/>
            </div>
            </div>
            <label class='label'>Complaint type</label>
            <div className="select-box">
              <select id = 'selectComplaint' class = 'form-select' name="type" value={credentials.type} onChange={onChange}>
                <option hidden>Select Complaint Type</option>
                <option>Theft</option>
                <option>Trespassing</option>
                <option>Vandalism</option>
                <option>Cybercrime</option>
                <option>Drug Possession</option>
                <option>Assault</option>
                <option>Fraud</option>
                <option>Murder</option>
                <option>Others</option>
              </select>
              </div>
              <div class='column'>
              <div class="input-box">
              <label>Location</label>
              <input type="text" placeholder="location" name="location"
                value={credentials.location}
                onChange={onChange}
                required/>
              </div>
              <div class="input-box">
              <label>Date</label>
              <input type="date" placeholder="Enter the date" name="time"
                value={credentials.time}
                onChange={onChange}
                required/>
              </div>
              </div>
              <div class='column'>
              <div class="input-box">
              <label>Accused</label>
              <input type="text" placeholder="Enter accused name" name="accused"
                value={credentials.accused}
                onChange={onChange}
                required/>
              </div>
              <div class="input-box">
              <label>Victim</label>
              <input type="text" placeholder="Enter victim name" 
                value={credentials.victim}
                name="victim"
                onChange={onChange}
                required/>
              </div>
              </div>
              <div class="input-box">
              <label>Nearest Station</label>
              <input type="text" placeholder="Enter Nearest Station name" name="nearestStation"
                value={credentials.nearestStation}
                onChange={onChange}
                required/>
              </div>
              <div class="input-box">
              <label>Description</label>
              <textarea type="text" placeholder="Enter the details of the complaint" name="description"
                value={credentials.description}
                onChange={onChange}
                required/>
              </div>
        

      
      <button>{userOrOfficer === "user"
              ? "Submit"
              : "Create Complaintee and submit"}</button>
    </form>
  </section>
  </div>
  );
}
