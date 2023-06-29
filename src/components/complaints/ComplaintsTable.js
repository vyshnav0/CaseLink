import React, { useState, useEffect, Fragment, useRef } from "react";
import { nanoid } from "nanoid";
import "./table.css";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

let data = [{}];


const ComplaintsTable = () => {
  const effectRan = useRef(false);
  useEffect(() => {
    if(effectRan.current === false){
      callComplaintPage()
      effectRan.current = true
  }
  }, []);

  const callComplaintPage = async () => {
    const response = await fetch("http://localhost:5000/obtaincomplaint", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  
    const json = await response.json();
    data = json.complaintdata;

    const newContacts = data.map((item) => ({
      complainant_name: item.reportedby,
      complainant_phone: item.contactno,
      incident_location: item.location,
      complainant_email: item.email,
      complaint_type: item.type,
      complaint_date: item.time.toString().slice(0,10),
      complaint_description: item.description,
      complaint_status: item.status,
    }));

    setContacts(newContacts);
  };

  const dataPassed = {
    complainant_name: data[0].reportedby,
    complainant_phone: data[0].contactno,
    incident_location: data[0].location,
    complainant_email: data[0].email,
    complaint_type: data[0].type,
    complaint_date: data[0].date,
    complaint_description: data[0].description,
    complaint_status: data[0].status,
  };

  console.log(`Data parsed: ${JSON.stringify(dataPassed)}`);
  const [contacts, setContacts] = useState([]);

  const [addFormData, setAddFormData] = useState({
    complainant_name: "",
    complainant_phone: "",
    incident_location: "",
    complainant_email: "",
    complaint_type: "",
    complaint_date: "",
    complaint_description: "",
    complaint_status: "",
  });

  const [editFormData, setEditFormData] = useState({
    complainant_name: "",
    complainant_phone: "",
    incident_location: "",
    complainant_email: "",
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
      complainant_name: addFormData.complainant_name,
      complainant_phone: addFormData.complainant_phone,
      incident_location: addFormData.incident_location,
      complainant_email: addFormData.complainant_email,
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
      complainant_name: editFormData.complainant_name,
      complainant_phone: editFormData.complainant_phone,
      incident_location: editFormData.incident_location,
      complainant_email: editFormData.complainant_email,
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

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      complainant_name: contact.complainant_name,
      complainant_phone: contact.complainant_phone,
      incident_location: contact.incident_location,
      complainant_email: contact.complainant_email,
      complaint_type: contact.complaint_type,
      complaint_date: contact.complaint_date,
      complaint_description: contact.complaint_description,
      complaint_status: contact.complaint_status,
    };

    setEditFormData(formValues);
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
    <div className="app-container">
      <form className="formtab" onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Registered By</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Location</th>
              <th>Type</th>
              <th>Date</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
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
  );
};

export default ComplaintsTable;
