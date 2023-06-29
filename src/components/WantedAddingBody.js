import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBInput } from 'mdb-react-ui-kit';

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

  const callComplaintPage = async () => {
    try {
      console.log('Going to fetch from complaintauth');
      const response = await fetch(`http://localhost:5000/complaintauth?authToken=${localStorage.getItem('authToken')}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();
      console.log(data);
      console.log('Returned from fetching comlpaintauth');
      if(!data.success){
        navigate("/")
      }
    } catch (error) {
      console.log('There was an error in authenticating user');
      navigate('/login');
    }
  };

  useEffect(() => {
    if (!effectRan.current) {
      callComplaintPage();
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
          img: image64,
          gender: credentials.gender,
          height: credentials.height,
          weight: credentials.weight,
          location: credentials.location,
          date: credentials.date,
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
      <form onSubmit={handleSubmit}>
        <h2 className="head">Add a Wanted Person</h2>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <label htmlFor="imageUpload" className="form-label">
            Upload Image
          </label>
          <input
            className="form-control form-control-sm"
            id="imageUpload"
            type="file"
            onChange={(e) => {
              UplaodImage(e);
            }}
            accept="image/*"
          />

          <MDBInput
            wrapperClass="mb-4"
            label="First name"
            name="fname"
            type="text"
            value={credentials.fname}
            onChange={onChange}
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Last name"
            name="lname"
            type="text"
            value={credentials.lname}
            onChange={onChange}
            required
          />
          <div className="d-flex justify-content-between">
            <MDBInput
              wrapperClass="mb-4"
              label="Age"
              name="age"
              type="number"
              value={credentials.age}
              onChange={onChange}
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Gender"
              name="gender"
              type="text"
              value={credentials.gender}
              onChange={onChange}
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Contact no"
              name="contactno"
              type="number"
              value={credentials.contactno}
              onChange={onChange}
              required
            />
          </div>

          <div className="d-flex justify-content-between">
            <MDBInput
              wrapperClass="mb-4"
              label="Height"
              name="height"
              type="number"
              value={credentials.height}
              onChange={onChange}
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Weight"
              name="weight"
              type="number"
              value={credentials.weight}
              onChange={onChange}
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <MDBInput
              wrapperClass="mb-4"
              label="Location"
              name="location"
              type="text"
              value={credentials.location}
              onChange={onChange}
              required
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Date"
              name="date"
              type="date"
              value={credentials.date}
              onChange={onChange}
              required
            />
          </div>

          <MDBBtn className="mb-4 w-100">Submit</MDBBtn>
        </MDBContainer>
      </form>
    </>
  );
}
