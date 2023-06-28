import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          // required="required"
          // placeholder="Enter a name..."
          name="complainant_name"
          value={editFormData.complainant_name}
          // onChange={handleEditFormChange}
          readOnly
        ></input>
      </td>
      <td>
        <input
          type="text"
          // required="required"
          // placeholder="Enter an address..."
          name="complainant_phone"
          value={editFormData.complainant_phone}
          readOnly
          // onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          // required="required"
          // placeholder="Enter an email..."
          name="complainant_email"
          value={editFormData.complainant_email}
          // onChange={handleEditFormChange}
          readOnly
        ></input>
      </td>
      <td>
        <input
          type="text"
          // required="required"
          // placeholder="Enter a phone number..."
          name="incident_location"
          value={editFormData.incident_location}
          // onChange={handleEditFormChange}
          readOnly
        ></input>
      </td>
      <td>
        <input
          type="text"
          // required="required"
          // placeholder="Enter a phone number..."
          name="complaint_type"
          value={editFormData.complaint_type}
          // onChange={handleEditFormChange}
          readOnly
        ></input>
      </td>
      <td>
        <input
          type="text"
          // required="required"
          // placeholder="Enter a phone number..."
          name="complaint_date"
          value={editFormData.complaint_date}
          // onChange={handleEditFormChange}
          readOnly
        ></input>
      </td>
      <td>
        <input
          type="text"
          // required="required"
          // placeholder="Enter a phone number..."
          name="complaint_description"
          value={editFormData.complaint_description}
          // onChange={handleEditFormChange}
          readOnly
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Open or In progress or Closed or Invalid "
          name="complaint_status"
          value={editFormData.complaint_status}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;