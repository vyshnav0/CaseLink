import React, { useState, useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../missing/basicTable.css'

function TableRows({ rows, tableRowRemove, onValUpdate }) {
  const imageArr = ["https://i.insider.com/61fa954fef63e10018101fb5?width=1000&format=jpeg&auto=webp","https://images.foxtv.com/static.fox10phoenix.com/www.fox10phoenix.com/content/uploads/2019/10/764/432/f169cce2-Ricky-Deeley-mug.jpg?ve=1&tl=1","https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jeremy_Meeks_Mug_Shot.jpg/330px-Jeremy_Meeks_Mug_Shot.jpg","http://hollywoodlife.com/wp-content/uploads/2009/12/kyle-chrisley-5-things-to-know-about-todde28099s-oldest-son-after-his-latest-arrest-01.jpg?w=680","https://hollywoodlife.com/wp-content/uploads/2009/12/DaniLeigh-Arrested-Mugshot-MEGA.jpg?w=680","https://hollywoodlife.com/wp-content/uploads/2009/12/ryan-edwards-mugshots-spl.jpg?w=680","https://hollywoodlife.com/wp-content/uploads/2009/12/ezra-miller-arrested-in-hawaii-mega-1.jpg?w=680","https://hollywoodlife.com/wp-content/uploads/2009/12/shutterstock_editorial_12844652a.jpg?w=680","http://hollywoodlife.com/wp-content/uploads/2009/12/bug-hall-mug-shot.jpg?w=680","http://hollywoodlife.com/wp-content/uploads/2009/12/jen-hartley-mugshot-embed.jpg?w=680","http://hollywoodlife.com/wp-content/uploads/2009/12/ynw-melly.jpg?w=680","https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202205/1212c9e4-b957-4928-a01f-58d51b-x1280.jpg?7Ygd.TOEYroNOcQ0idAwNdo4MYqrouJp","http://hollywoodlife.com/wp-content/uploads/2009/12/jussie-smollett-mugshot-gallery.jpg?w=680"]
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
  const [toDelete,settoDelete] = useState([])

  const callMissingPage = async () => {
    try {
      const response = await fetch('http://localhost:5000/obtainwanted', {
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

  const updateBackend = async () => {
    const ans = window.confirm("Are you sure you want to delete")
    if(ans){
      try {
        await Promise.all(
          toDelete.map(async (i, index) => {
            console.log(`Entry to be deleted has name ${i.fn} ${i.ln}`);
            try {
              const del = await fetch("http://localhost:5000/deletewanted", {
                method: 'DELETE',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fname: i.fn,
                   lname: i.ln, 
                   age: i.ag, 
                   gender: i.g, 
                   height: i.h, 
                   weight: i.w })
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
    <h2>WANTED</h2>
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