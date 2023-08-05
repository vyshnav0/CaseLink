import React, { useState, useEffect, Fragment, useRef } from "react";
import { nanoid } from "nanoid";
import "./table.css";
import {useNavigate} from 'react-router-dom'
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

let data = [{}];

const ComplaintsTable = () => {
  const navigate = useNavigate()
  const effectRan = useRef(false);
  useEffect(() => {
    if(effectRan.current === false){
      callCrimePage()
      effectRan.current = true
  }
  }, []);

  const callCrimePage = async () => {
    const cidarray = JSON.parse(localStorage.getItem("data")).opencases
    const response = await fetch("http://localhost:5000/officercrime", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify({cidarray : cidarray}),
      credentials: "include",
    });
  
    const json = await response.json();
    console.log(`This is the response after fetching crime: ${json}`);
    data = json.crimedata;

    const newContacts = data.map((item) => ({
      complainant_id: item.cid,
      complainant_name: item.reportedby,
      complainant_phone: item.contactno,
      incident_location: item.location,
      complaint_type: item.type,
      complaint_date: item.time.toString().slice(0,10),
      complaint_description: item.description,
      complaint_status: item.status,
    }));

    setContacts(newContacts);
  };

  
  const [contacts, setContacts] = useState([]);

  const [addFormData, setAddFormData] = useState({
    complainant_id: "",
    complainant_name: "",
    complainant_phone: "",
    incident_location: "",
    complaint_type: "",
    complaint_date: "",
    complaint_description: "",
    complaint_status: "",
  });

  const [editFormData, setEditFormData] = useState({
    complainant_id: "",
    complainant_name: "",
    complainant_phone: "",
    incident_location: "",
    complaint_type: "",
    complaint_date: "",
    complaint_description: "",
    complaint_status: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      complainant_id: addFormData.complainant_id,
      complainant_name: addFormData.complainant_name,
      complainant_phone: addFormData.complainant_phone,
      incident_location: addFormData.incident_location,
      complaint_type: addFormData.complaint_type,
      complaint_date: addFormData.complaint_date,
      complaint_description: addFormData.complaint_description,
      complaint_status: addFormData.complaint_status,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      complainant_id: editFormData.complainant_id,
      complainant_name: editFormData.complainant_name,
      complainant_phone: editFormData.complainant_phone,
      incident_location: editFormData.incident_location,
      complaint_type: editFormData.complaint_type,
      complaint_date: editFormData.complaint_date,
      complaint_description: editFormData.complaint_description,
      complaint_status: editFormData.complaint_status,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = async(event, contact) => {
    event.preventDefault();
    // setEditContactId(contact.id);

    // const formValues = {
    //   complainant_id: contact.complainant_id,
    //   complainant_name: contact.complainant_name,
    //   complainant_phone: contact.complainant_phone,
    //   incident_location: contact.incident_location,
    //   complaint_type: contact.complaint_type,
    //   complaint_date: contact.complaint_date,
    //   complaint_description: contact.complaint_description,
    //   complaint_status: contact.complaint_status,
    // };

    // setEditFormData(formValues);

    const cid = contact.complainant_id
    console.log(`Fetching details of ${cid}`);
    try {
      const cr = await fetch(`http://localhost:5000/getcrime?cid=${cid}`,{
        method:"GET",
        headers: {
          "Content-Type" : "application/json",
          Accept : "application/json"
        }
      })
      const crimedata = await cr.json()
      localStorage.setItem("crimedata",JSON.stringify(crimedata.crimedata))
      navigate("/crimedetails")
    }
    catch (error) {
      console.error(error);
    }
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <>
    <div className='tableheading'>
    <h1>CRIME</h1>
    </div>
    <div className="app-container">
      <form className="formtab" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th style={{position: 'sticky', top: 0}}>Complaint ID</th>
              <th style={{position: 'sticky', top: 0}}>Registered By</th>
              <th style={{position: 'sticky', top: 0}}>Phone Number</th>
              <th style={{position: 'sticky', top: 0}}>Location</th>
              <th style={{position: 'sticky', top: 0}}>Type</th>
              <th style={{position: 'sticky', top: 0}}>Date</th>
              <th style={{position: 'sticky', top: 0}}>Description</th>
              <th style={{position: 'sticky', top: 0}}>Status</th>
              <th style={{position: 'sticky', top: 0}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment key={contact.id}>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
    </>

  );
};

export default ComplaintsTable;
