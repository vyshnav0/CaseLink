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
      <div className='profile_pic'><img src=''></img></div>
      <div className='name'><p>{name}</p></div>
      <div className='name'><p>{age}</p></div>
      <div className='name'><p>{sex}</p></div>
      <div className='name'><p>{contactno}</p></div>
      <div className='name'><p>{email}</p></div>
      <div className='name'><p>{address}</p></div>
      <div className='name'><p>{fathersName}</p></div>
      <div className='name'><p>{mothersName}</p></div>

    </div>
  )
}
