import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function TableRows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowData, index) => {
    const { id, full_name, age, gender, height, weight, last_seen_location, last_seen_date, contact_number } = rowData;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={id}
            onChange={(event) => onValUpdate(index, event)}
            name="id"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={full_name}
            onChange={(event) => onValUpdate(index, event)}
            name="full_name"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={age}
            onChange={(event) => onValUpdate(index, event)}
            name="age"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={gender}
            onChange={(event) => onValUpdate(index, event)}
            name="gender"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={height}
            onChange={(event) => onValUpdate(index, event)}
            name="height"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={weight}
            onChange={(event) => onValUpdate(index, event)}
            name="weight"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={last_seen_location}
            onChange={(event) => onValUpdate(index, event)}
            name="last_seen_location"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={last_seen_date}
            onChange={(event) => onValUpdate(index, event)}
            name="last_seen_date"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={contact_number}
            onChange={(event) => onValUpdate(index, event)}
            name="contact_number"
            className="form-control"
          />
        </td>
        <td>
          <button
            className="btn btn-dark"
            onClick={() => tableRowRemove(index)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  });
}

export const BasicTable = () => {
  let data = [{}];
  const effectRan = useRef(false);
  const [fullname, setFullname] = useState([]);
  const [missingPersons, setMissingPersons] = useState([]);
  const [rows, setRows] = useState([]);

  const callMissingPage = async () => {
    try {
      const response = await fetch('http://localhost:5000/obtainmissing', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      data = await response.json();
      console.log("This is the data obtained");
      console.log(data);
      const updatedFullname = data.fname.map((fname, index) => {
        const lname = data.lname[index].lname;
        const fullname = fname.fname + " " + lname
        const age = data.age[index].age;
        const gender = data.gender[index].gender;
        const height = data.height[index].height;
        const weight = data.weight[index].weight;
        const location = data.location[index].location;
        const date = data.date[index].date;
        const contactno = data.contactno[index].contactno;
        console.log(`This is the fullname ${fullname}`);
        return {
          full_name: fullname,
          age: age,
          gender: gender,
          height: height,
          weight: weight,
          last_seen_location: location,
          last_seen_date: date,
          contact_number: contactno
        };
      });
      setFullname(updatedFullname);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const missingPersons = fullname.map((name) => ({
      full_name: name.full_name,
      age: name.age,
      gender: name.gender,
      height: name.height,
      weight: name.weight,
      last_seen_location: name.last_seen_location,
      last_seen_date: name.last_seen_date,
      contact_number: name.contact_number,
    }));
    setMissingPersons(missingPersons);
  }, [fullname]);

  missingPersons.map((person,index) => {
    const full_name = person.full_name;
    const age = person.age;
    const gender = person.gender;
    const height = person.height;
    const weight = person.weight;
    const lastSeenLocation = person.last_seen_location;
    const lastSeenDate = person.last_seen_date;
    const contactNumber = person.contact_number;

    let personData = {
      full_name: full_name,
      age: age,
      gender: gender,
      height: height,
      weight: weight,
      last_seen_location: lastSeenLocation,
      last_seen_date: lastSeenDate,
      contact_number: contactNumber,
    }
    return personData
  })

  useEffect(() => {
    if (effectRan.current === false) {
      callMissingPage();
      effectRan.current = true;
    }
    console.log("And this is the data being set");
    console.log(missingPersons);
    setRows(missingPersons)
  }, [missingPersons]);

  const addRowTable = () => {
    const newRow = {
      id: "",
      full_name: "",
      age: "",
      gender: "",
      height: "",
      weight: "",
      last_seen_location: "",
      last_seen_date: "",
      contact_number: "",
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
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Full Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Location</th>
            <th>Date</th>
            <th>Contact Info</th>
            <th>
              <button className="btn btn-danger" onClick={addRowTable}>
                Add Entry
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