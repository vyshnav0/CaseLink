import React from 'react'
import ComplaintsTable from './complaints/ComplaintsTable'

export default function ComplaintStatusBody() {
  return (
    <>
      {/* Some complaint status */}
      <h1>All Complaints</h1>
      <ComplaintsTable/>
    </>
  )
}
