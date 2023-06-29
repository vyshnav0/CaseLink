import React from 'react';
import Chart from 'react-apexcharts';


export default function Analysis() {
    const series = [
        {
          name: "No. of reported cases", //will be displayed on the y-axis
          data: [43, 53, 50, 57]
        }
      ];
      const options = {
        chart: {
          id: "caselink_report"
        },
        xaxis: {
          categories: [
            "Vandalsim",
            "Robbery",
            "Murder",
            "Attempt to Murder"
          ] //will be displayed on the x-asis
        }
      };
  return (
    <div>
        {/* <p>hi</p> */}
        <Chart options={options} type="bar" series={series} width="70%" />
    </div>
  )
}