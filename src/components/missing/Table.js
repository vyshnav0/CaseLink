import React, { useState, useEffect } from "react";
import MOCK_DATA from './MOCK_DATA.json'

function TableRows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { id, full_name, age, gender, height, weight, last_seen_location, last_seen_date, contact_number } = rowsData;

    return (
      <tr key={index}>
          <td>
            <input
              type="text"
              value={id}
              onChange={(event) => onValUpdate(index, event)}
              name="id"
            //   className="form-control"
            />
          </td>
          <td>
            <input
              type="text"
              value={full_name}
              onChange={(event) => onValUpdate(index, event)}
              name="full_name"
            //   className="form-control"
            />
          </td>
          <td>
            <input
              type="text"
              value={age}
              onChange={(event) => onValUpdate(index, event)}
              name="age"
            //   className="form-control"
            />
          </td>
          <td>
            <input
              type="text"
              value={gender}
              onChange={(event) => onValUpdate(index, event)}
              name="gender"
            //   className="form-control"
            />
          </td>
          <td>
            <input
              type="text"
              value={height}
              onChange={(event) => onValUpdate(index, event)}
              name="height"
            //   className="form-control"
            />
          </td>
          <td>
            <input
              type="text"
              value={weight}
              onChange={(event) => onValUpdate(index, event)}
              name="weight"
            //   className="form-control"
            />
          </td>
          <td>
            <input
              type="text"
              value={last_seen_location}
              onChange={(event) => onValUpdate(index, event)}
              name="last_seen_location"
            //   className="form-control"
            />
          </td>
          <td>
            <input
              type="text"
              value={last_seen_date}
              onChange={(event) => onValUpdate(index, event)}
              name="last_seen_date"
            //   className="form-control"
            />
          </td>
          <td>
            <input
              type="text"
              value={contact_number}
              onChange={(event) => onValUpdate(index, event)}
              name="contact_number"
            //   className="form-control"
            />
          </td>
        <td>
          <button
            className="btn btn-dark"
            onClick={() => tableRowRemove(index)}
          >
            Delete Row
          </button>
        </td>
      </tr>
    );
  });
}
function Table() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(MOCK_DATA)
  }, []
  );

  const addRowTable = () => {
    const newRow = {
      name: "",
      email: "",
      profile: "",
    };
    setRows([...rows, newRow]);
  };

  const tableRowRemove = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const onValUpdate = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };
  return (
    <>
      <h2 className="text-center">React JS Add / Delete Table Rows Example</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Profile</th>
            <th>
              <button className="btn btn-danger" onClick={addRowTable}>
                Insert Row
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRows
            rows={rows}
            tableRowRemove={tableRowRemove}
            onValUpdate={onValUpdate}
          />
        </tbody>
      </table>
    </>
  );
}
export default Table;