import React from 'react'
import Header from '../components/Header'
import SearchComplaintBody from '../components/SearchComplaintBody'

export default function SearchComplaint() {

  const status = localStorage.getItem("complaintstatus") === "fetched"

  return (
    <div>
        <Header></Header>
        <SearchComplaintBody></SearchComplaintBody>
    </div>
  )
}
