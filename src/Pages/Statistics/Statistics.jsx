import React from 'react';
import Chart from "react-apexcharts";


const Statistics = () => {
  const localData = JSON.parse(localStorage.getItem('donateItem'))
  let total = 0;
  if (localData) {
    total = localData.reduce((a,b) => a + b , 0)
  }
  return (
    <div>
      <Chart
        width={800}
        height={800}
        type="pie"
        series={[10, total]}
        options={{
          labels: ["Total Donation", "Your Donation"],
          legend: {
           
            position: "bottom",
          },
         
        }}
      />
    </div>
  );
};

export default Statistics;