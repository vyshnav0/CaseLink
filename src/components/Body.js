import React from 'react'
import '../style/Body.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {NavLink} from 'react-router-dom'

export default function Body() {
  return (
    <div className="homepage">
      <div className="reportingCrimesMade">
        Reporting Crimes made easy
      </div>
      <img className="homepageChild" alt="" src="/Justice.png" />
      <NavLink  to='/filecomplaint'>
      <Button
        className="homepageItem"
        variant="outline-dark"
        name="button"
        id="fileacomplaint"
      >
        File a Complaint
      </Button>
      </NavLink>
      <div className="enjoyTheConvenience">
        Enjoy the convenience of accessing police station services from the
        comfort of your  home!
      </div>
    </div>
  )
}