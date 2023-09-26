
import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Your Donation Percentage",
};
const totalDonation = JSON.parse(localStorage.getItem('donation'));
console.log(totalDonation.length);
export const data = [
    ["Task", "Total Donation Percentage"],
    ["Total Donation", 12 - totalDonation.length],
    ["Your Donation", totalDonation.length ],
  ];

const Statistics = () => {

    return (
        <div className="mx-20 my-20">

            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
                />
        </div>
    );
};

export default Statistics;