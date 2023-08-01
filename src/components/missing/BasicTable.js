import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function TableRows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowData, index) => {
    const {  full_name, age, gender, height, weight, last_seen_location, last_seen_date, contact_number } = rowData;
    return (
      <tr key={index}>
        {/* <td>
          <input
            type="text"
            value={id}
            onChange={(event) => onValUpdate(index, event)}
            name="id"
            className="form-control"
          />
        </td> */}
        <td>
          <input
            type="text"
            value={full_name}
            onChange={(event) => onValUpdate(index, event)}
            name="full_name"
            readOnly
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={age}
            onChange={(event) => onValUpdate(index, event)}
            name="age"
            readOnly
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={gender}
            onChange={(event) => onValUpdate(index, event)}
            name="gender"
            readOnly
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={height}
            onChange={(event) => onValUpdate(index, event)}
            name="height"
            readOnly
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={weight}
            onChange={(event) => onValUpdate(index, event)}
            name="weight"
            readOnly
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={last_seen_location}
            onChange={(event) => onValUpdate(index, event)}
            readOnly
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
            readOnly
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={contact_number}
            onChange={(event) => onValUpdate(index, event)}
            name="contact_number"
            readOnly
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
  const [toDelete, settoDelete] = useState([])

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
    console.log("Data should be set successfully");
    setMissingPersons(missingPersons);
  }, [fullname]);

  useEffect(() => {
    if (effectRan.current === false) {
      callMissingPage();
      effectRan.current = true;
    }
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
    const fullname = rows[index].full_name
    const fname = fullname.trim().split(" ")[0]
    const lname = fullname.trim().split(" ")[1]
    const age = rows[index].age
    const gender = rows[index].gender
    const height = rows[index].height
    const weight = rows[index].weight
    const removedOBJ = {
      fn : fname,
      ln : lname,
      ag : age,
      g : gender,
      h : height,
      w : weight
    }
    settoDelete((prevstate) => [...prevstate , removedOBJ])
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const updateBackend = async () => {
    try {
      await Promise.all(
        toDelete.map(async (i, index) => {
          console.log(`Entry to be deleted has name ${i.fn} ${i.ln}`);
          try {
            const del = await fetch("http://localhost:5000/deletemissing", {
              method: 'DELETE',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ fname: i.fn, lname: i.ln, age: i.ag, gender: i.g, height: i.h, weight: i.w })
            });
            const res = await del.json();
            if (res.success) {
              console.log("Successfully deleted entries");
              alert("Entry deleted succesfully")
            }
            else {
              console.log("There was an error in deleting entries");
            }
          } catch (error) {
            console.error(error);
          }
        })
      );
    } catch (error) {
      console.error(error);
    }
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
            {/* <th>Id</th> */}
            <th>Full Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Location</th>
            <th>Date</th>
            <th>Contact Info</th>
            <th>
              <button className="btn btn-danger" onClick={updateBackend}>
                Confirm Delete
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