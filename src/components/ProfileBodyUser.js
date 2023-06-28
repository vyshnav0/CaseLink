import React from 'react'

export default function ProfileBody() {

  const data = JSON.parse(localStorage.getItem('data'));
  const username = data.username;
  const name = data.fname + " " + data.lname
  const age = data.age;
  const sex = data.sex;
  const contactno = data.contactno;
  const email = data.email;
  const address = data.address;
  const fathersName = data.fathersName;
  const mothersName = data.mothersName;

  return (
    <div>
      ProfileBodyUser
    </div>
  )
}
