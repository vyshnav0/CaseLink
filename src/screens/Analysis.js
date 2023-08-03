import React from 'react';
import Chart from 'react-apexcharts';
import Header from '../components/Header'
import CrimeData from  './CRIME_DATA .json';

export default function Analysis() {
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
  console.log(noOfCrimes);
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
