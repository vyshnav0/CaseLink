import React from 'react';
import Chart from 'react-apexcharts';
import Header from '../components/Header'

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
      <Header></Header>
        {/* <p>hi</p> */}
        <Chart  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} options={options} type="bar" series={series} width="60%" />
    </div>
  )
}


// import React from 'react';
// import Chart from 'react-apexcharts';
// import Header from '../components/Header';

// export default function Analysis() {
//   const series = [
//     {
//       name: 'No. of reported cases', // will be displayed on the y-axis
//       data: [43, 53, 50, 57],
//     },
//   ];
//   const options = {
//     chart: {
//       id: 'caselink_report',
//     },
//     xaxis: {
//       categories: ['Vandalsim', 'Robbery', 'Murder', 'Attempt to Murder'], // will be displayed on the x-axis
//     },
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <div>
//         <Header />
//         {/* <p>hi</p> */}
//         <Chart options={options} type="bar" series={series} width="40%" />
//       </div>
//     </div>
//   );
// }
