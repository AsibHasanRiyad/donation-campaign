import React from 'react';
import Chart from "react-apexcharts";


const Statistics = () => {
  const localData = JSON.parse(localStorage.getItem('donateItem'))
  let total = 0;
  if (localData) {
    total = localData.reduce((a,b) => a + b , 0)
  }
  return (
    <div className=' flex justify-center items-center h-[60vh] mt-20'>
      <Chart
        width={300}
        height={300}
        type="pie"
        series={[12, total]}
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