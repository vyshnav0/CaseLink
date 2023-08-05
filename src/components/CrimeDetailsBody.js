import React from 'react'
import '../style/ComplaintDetailBody.css'

export default function CrimeDetailsBody() {

  const crimedata = localStorage.getItem("crimedata")
  const json = JSON.parse(crimedata)
  const [crimeno, cid, casetaken, location, time, type, investigatedby, reportedby, status, criminal, victim] = [json.crimeno,json.cid,json.casetaken.toString().slice(0,10),json.location,json.time.toString().slice(0, 10),json.type,json.investigatedby,json.reportedby,json.status,json.criminal,json.victim];

  return (
  <div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-7">
        <div className="cardcomplaint">
        <div class="card mb-4">
          <div class="card-body">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td class="text-start"><h6 class='complaint_head'>Complaint Details</h6></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td class='text-muted' colspan="2">Complaint Number</td>
                  <td class="text-end">{cid}</td>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Type</td>
                  <td class="text-end">{type}</td>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Date</td>
                  <td class="text-end">{time}</td>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Location</td>
                  <td class="text-end">{location}</td>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Criminal</td>
                  {/* <td class="text-end">{criminal}</td> */}
                  <ul>
                    {criminal.map((ongoing, i) => (
                    <li key={i}>{ongoing}</li>
                     ))}
                  </ul>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Victim</td>
                  {/* <td class="text-end">{victim}</td> */}
                  <ul>
                    {victim.map((ongoing, i) => (
                    <li key={i}>{ongoing}</li>
                     ))}
                  </ul>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Case Taken</td>
                  <td class="text-end">{casetaken}</td>
                </tr>
                <tr>
                  <td class='text-muted' colspan="2">Status</td>
                  <td class="text-end">{status}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
      <div class="col-lg-4">
      <div className="cardcomplaint">
        <div class="card mb-4">
          <div class="card-body">
            <h6 class='complaint_head '>Reported By</h6>
            <p>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Name</p>
                      <p class="mb-0">{reportedby}</p>
            </div>
            </div>
            </p>
          </div>
        </div>
      </div>
    </div>
      <div class="col-lg-11">
      <div className="cardcomplaint">
        <div class="card mb-4">
          <div class="card-body">
            <h6 class='complaint_head '>Investigation Details</h6>
            <p>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Investigated by</p>
                      <p class="mb-0">{investigatedby}</p>
            </div>
            </div>
            <div class="d-flex justify-content-start mb-2">
            <div class="px-1">
                      <p class="small text-muted mb-1 mt-3">Crime Number</p>
                      <p class="mb-0">{crimeno}</p>
            </div>
            </div>
            </p>
            </div>
        </div>
      </div>
      </div>
  
    </div>
    </div>
  </div>
  )
}
