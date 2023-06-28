import React from 'react'
import Header from '../components/Header'
import { BasicTable } from '../components/crud table/BasicTable'
import Table  from '../components/crud table/Table'
export default function ManageMissing() {
    return (
      <div>
        <Header></Header>
        <h1>this is ManageMissing</h1>
        <BasicTable/>
        {/* <Table/> */}
  
      </div>
    )
  }