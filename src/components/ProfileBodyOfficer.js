import React from 'react'

export default function ProfileBodyOfficer() {

  const data = JSON.parse(localStorage.getItem(data))
  const pen = data.pen
  const name = data.fname + " " + data.lname
  const age = data.age;
  const sex = data.sex;
  const rank = data.rank;
  const contactno = data.contactno;
  const station = data.station;

  return (
    <div>
      ProfileBodyOfficer
    </div>
  )
}
