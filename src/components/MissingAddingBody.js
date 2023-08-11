import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import '../style/Forms.css'

export default function WantedAddingBody() {
  const [base64, setBase64] = useState('');
  const [credentials, setCredentials] = useState({ fname: '', lname: '', age: '', gender: '', height: '', weight: '', location: '', date: '', contactno: '' });
  const effectRan = useRef(false)

  const UplaodImage = async (e) => {
    const file = e.target.files[0];
    const imgstr = await convertBase64(file);
    setBase64(imgstr);
    console.log(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const filereader = new FileReader();
      filereader.readAsDataURL(file);

      filereader.onload = () => {
        resolve(filereader.result);
      };

      filereader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const userOrOfficer = localStorage.getItem('usertype');
  const navigate = useNavigate();

  const callAuthentication = async () => {
    try {
      const response = await fetch(`http://localhost:5000/complaintauth?authToken=${localStorage.getItem('authToken')}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();
      if(!data.success || userOrOfficer === 'user'){
        navigate("/")
      }
    } catch (error) {
      console.log('There was an error in authenticating user');
      navigate('/login');
    }
  };

  useEffect(() => {
    if (!effectRan.current) {
      callAuthentication();
      effectRan.current = true;
    }
  }, []);

  const createWanted = async (image64) => {
    try {
      const WantedResponse = await fetch('http://localhost:5000/addmissing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fname: credentials.fname,
          lname: credentials.lname,
          age: credentials.age,
          img: "image64",
          gender: credentials.gender,
          height: credentials.height,
          weight: credentials.weight,
          location: credentials.location,
          date: credentials.date.toString().slice(0,10),
          contactno: credentials.contactno,
        }),
      });

      const jsonWanted = await WantedResponse.json();
      console.log(jsonWanted);

      if (!jsonWanted.success) {
        alert('There was an error in accepting your data. Please try again.');
      }
      if (jsonWanted.success) {
        console.log('Created Wanted successfully');
        navigate('/missingtable');
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (base64 !== '') {
      console.log(`Since officer, going to createmissing with img data`);
      createWanted(base64);
    }
  }, [base64]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    createWanted("dump")
    if (userOrOfficer === 'officer') {
      // base64 value will be handled by the useEffect above
      // if it has changed, the createWanted function will be called
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
    <div class='body-3'>
    <section class="container-2">
    <header>Add a Missing Person</header>
    <form onSubmit={handleSubmit} class="form">
      <div class='column'>
      <div class="input-box">
        <label>First Name</label>
        <input type="text" placeholder="Enter the first name" name='fname'
            value={credentials.fname}
            onChange={onChange}
            required/>
        </div>
        <div class="input-box">
        <label>Last Name</label>
        <input type="text" placeholder="Enter the last name" name='lname'
            value={credentials.lname}
            onChange={onChange}
            required/>
        </div>
        </div>
              <div class='column'>
              <div class="input-box">
              <label>Age</label>
              <input type="number" placeholder="Enter age" name="age"
                value={credentials.age}
                onChange={onChange}
                required/>
              </div>
          <div class="gender-box">
          <label class='idtype'>Gender</label>
          <div class="gender-option">
            <div class="gender">
              <input type="radio" id="check-male" name="gender" value='Male' checked={credentials.gender==="Male"} onChange={onChange}/>
              <label for="check-male">Male</label>
            </div>
            <div class="gender">
              <input type="radio" id="check-female" name="gender" value='Female' checked={credentials.gender==="Female"} onChange={onChange}/>
              <label for="check-female">Female</label> 
            </div>
            <div class="gender">
              <input type="radio" id="check-other" name="gender" value='Other' checked={credentials.gender==="Other"} onChange={onChange}/>
              <label for="check-other">Other</label>
            </div>
          </div>
        </div>
              </div>
              <div class='column'>
              <div class="input-box">
              <label>Contact Number</label>
              <input type="text" placeholder="Contact number" 
                value={credentials.contactno}
                name="contactno"
                onChange={onChange}
                required/>
              </div>
              <div class="input-box">
              <label>Location</label>
              <input type="text" placeholder="Enter the location" name="location"
                value={credentials.location}
                onChange={onChange}
                required/>
              </div>
              <div class="input-box">
              <label>Date</label>
              <input type="date" placeholder="Enter the date" name="date"
                value={credentials.date}
                onChange={onChange}
                required/>
              </div>
              </div>
        <div class="column">
        <div class="input-box">
        <label>Height</label>
        <input type="text" placeholder="Enter the height of the missing person" name="height"
            value={credentials.height}
            onChange={onChange}
            required/>
        </div>
        <div class="input-box">
        <label>Weight</label>
        <input type="text" placeholder="Enter the weight of the missing person" name="weight"
            value={credentials.weight}
            onChange={onChange}
            required />
        </div>
        </div>
      <button>Submit</button>
    </form>
  </section>
  </div>
    </>
  );
}
