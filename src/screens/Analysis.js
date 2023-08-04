import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import Header from '../components/Header'
import { useEffect } from 'react';

export default function Analysis() {

  let [CrimeData,setCrimeData] = useState([])

  useEffect(() => {
    fetchData()
  },(CrimeData))

  const fetchData = async() => {
    const all = "all"
    try {
      const crime = await fetch(`http://localhost:5000/getcrime?cid=${all}`,{
        method: "GET",
        headers: {
          'Content-Type' : "application/json",
          Accept : "application/json"
        }
      })

      const res = await crime.json()
      setCrimeData(res.crimedata)
    }
    catch (error) {
      console.error(error);
    }
  }

  function countCrimesByType(data) {
    const crimeCounts = {};
    for (const crime of data) {
      const crimeType = crime.type;
      if (crimeCounts[crimeType]) {
        crimeCounts[crimeType]++;
      } else {
        crimeCounts[crimeType] = 1;
      }
    }
    return crimeCounts;
  }
  const noOfCrimes = countCrimesByType(CrimeData);
  const categories = ['Trespassing', 'Theft', 'Vandalism', 'Cybercrime', 'Drug Possession', 'Assault', 'Fraud', 'Murder', 'Others'];
  const data = categories.map((crimeType) => noOfCrimes[crimeType]);
    const series = [
        {
          name: "No. of reported cases", //will be displayed on the y-axis
          // data: [43, 53, 50, 57]
          data: data
          
        }
      ];
      const options = {
        chart: {
          id: "caselink_report"

        },
        xaxis: {
          title: {
            text: "Crimes",
            style: {
              fontSize: '20px', 
            }
          },
          categories: categories,       
        },
        yaxis: {
          title: {
            text: "Rate",
            style: {
              fontSize: '20px', 
            }
          },
        }
      };
  return (
    <div>
      <Header></Header>
        {/* <p>hi</p> */}
        <Chart  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} options={options} type="bar" series={series} width="60%" />
    </div>
  )
}
