import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./table.css";
import data from "./DBcomplaint.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const ComplaintsTable = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    complainant_name: "",
    complainant_phone: "",
    complainant_email: "",
    incident_location: "",
    complaint_type: "",
    complaint_date: "",
    complaint_description: "",
    complaint_status: "",
  });

  const [editFormData, setEditFormData] = useState({
    complainant_name: "",
    complainant_phone: "",
    complainant_email: "",
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
      complainant_email: contact.complainant_email,
      incident_location: contact.incident_location,
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
      <form className='formtab' onSubmit={handleEditFormSubmit}>
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

      {/* <h2>Add an Entry</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="complainant_name"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="complainant_phone"
          required="required"
          placeholder="Enter an location..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="incident_location"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="complainant_email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form> */}
    </div>
  );
};

export default ComplaintsTable;