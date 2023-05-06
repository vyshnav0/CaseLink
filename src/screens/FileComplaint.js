import React from 'react'
import FileComplaintBody from '../components/FileComplaintBody'
import Sidebar from '../components/Sidebar'

export default function FileComplaint() {
  return (
    <div>
        <Sidebar></Sidebar>
        <FileComplaintBody>NOT TO BE ACCESSED WITHOUT LOGIN</FileComplaintBody>
    </div>
  )
}
