import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './basicTable.css'
function TableRows({ rows, tableRowRemove, onValUpdate }) {
  const imageArr = ["https://i2-prod.mirror.co.uk/incoming/article29680153.ece/ALTERNATES/s1200d/0_Lesley-Trotter.jpg","https://i2-prod.leicestermercury.co.uk/incoming/article8322916.ece/ALTERNATES/s810/0_joan-wooton.jpg","https://kstp.com/wp-content/uploads/2022/05/yvonne-faye-ingram-missing-person.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bGK0kza-G5KfRlPpRdbeASoEZ8EgMRrwzbAUFyC4FOWOT2WEAdhjnM_KxJnOTLsutN4&usqp=CAU","https://13wham.com/resources/media2/16x9/full/1024/center/80/e24b6eaf-0c71-4781-8724-e1d60fe4ff78-large16x9_image_64834412.JPG","https://assets3.cbsnewsstatic.com/hub/i/r/2023/02/23/ac98cb04-bce2-4d44-bbac-6a8ea4ec2d0b/thumbnail/620x636/42d6f57a5db036a437ca14ef3c8d0ab8/fpotbc-aeaaoe4y.jpg?v=f3503a7856c58c20acab4eae8bb1f0f4","https://imageresizer.static9.net.au/DpVF057WMcEG8nWrcS4Gig1tjrQ=/1000x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F01bd8413-dec4-44c4-920d-cf19cfa11836","https://gray-wbtv-prod.cdn.arcpublishing.com/resizer/ptoT3WwUk8sXdlevitI6HNnPYtk=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/4Z7QBREIHNF4XMT3R72MOCJXRM.jpg","https://i.cbc.ca/1.6198579.1633344531!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/patricia-levy.jpg"]

  return rows.map((rowData, index) => {
    const img=imageArr[index]
    const {  full_name, age, gender, height, weight, last_seen_location, last_seen_date, contact_number } = rowData;
    return (
      <div class="container-fluid">
      <div className="card_missing">
        <div class="card" style={{border:'0'}}>
          <div class="card-body p-5 d-flex align-items-center">
          <div class="flex-shrink-0">
                <img src={img}
                  alt="Generic placeholder image" class="img-fluid1"/>
          </div>
            <p>
            <div class='column'>
            <h5 class='complaint_head '>{full_name}</h5>
            </div>
            <div className='column'>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Age</p>
                      <p class="mb-0">{age}</p>
            </div>
            </div>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Gender</p>
                      <p class="mb-0">{gender}</p>
            </div>
            </div>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Height</p>
                      <p class="mb-0">{height}</p>
            </div>
            </div>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Weight</p>
                      <p class="mb-0">{weight}</p>
            </div>
            </div>
            </div>
            <div className='column'>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Contact Number</p>
                      <p class="mb-0">{contact_number}</p>
            </div>
            </div>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Last seen Date</p>
                      <p class="mb-0">{last_seen_date}</p>
            </div>
            </div>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Last seen Location</p>
                      <p class="mb-0">{last_seen_location}</p>
            </div>
            </div>
            <div class="d-flex justify-content-end mb-2">
            <button className="buttn" onClick={() => tableRowRemove(index)}>Remove</button>
            </div>
            </div>

            
            </p>
            </div>
        </div>
      </div>
      </div>
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
    const ans = window.confirm("Are you sure you want to delete the selected items?")
    if(ans){
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
              }
              else {
                console.log("There was an error in deleting entries");
              }
            }
            catch (error) {
              console.error(error);
            }
          })
          );
          alert("Entry deleted succesfully")
      }
      catch (error) {
        console.error(error);
      }
    }
    else{
      // do nothing
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
    <div className='missing'>
    <div className='tableheading1'>
    <h2>MISSING PERSONS</h2>
    </div>
    <div class="d-flex justify-content-end mt-1 mb-2 me-5">
      <div class="px-1">
      <button className="buttn1" onClick={updateBackend}>Confirm Delete</button>
      </div>
      </div>
      <table className="table_1">
        <tbody>
          <TableRows
            rows={rows}
            tableRowRemove={tableRowRemove}
            onValUpdate={onValUpdate}
          />
        </tbody>
      </table>
      </div>
    </>
  );
}