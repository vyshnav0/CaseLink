import React from 'react'
import FileComplaintBody from '../components/FileComplaintBody'
import Footer from '../components/Footer';
import Header from '../components/Header'

export default function FileComplaint() {
  const divStyle = {
    backgroundColor: '#dceefa',
    // Add more styles as needed
  }
  return (
    <div style={divStyle}>
        <Header></Header>
        <FileComplaintBody></FileComplaintBody>
        <Footer></Footer>

    </div>
  )
}
