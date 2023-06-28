import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.complainant_name}</td>
      <td>{contact.complainant_phone}</td>
      <td>{contact.complainant_email}</td>
      <td>{contact.incident_location}</td>
      <td>{contact.complaint_type}</td>
      <td>{contact.complaint_date}</td>
      <td>{contact.complaint_description}</td>
      <td>{contact.complaint_status}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        {/* <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button> */}
      </td>
    </tr>
  );
};

export default ReadOnlyRow;