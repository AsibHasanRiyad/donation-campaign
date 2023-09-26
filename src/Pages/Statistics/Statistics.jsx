
import React from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Your Donation Percentage",
};
const totalDonation = JSON.parse(localStorage.getItem('donation'));
const donationLength = totalDonation.length
export const data = [
    ["Task", "Total Donation Percentage"],
    ["Total Donation", 12 - donationLength],
    ["Your Donation", donationLength  ],
  ];

const Statistics = () => {

    return (
        <div className="mx-20 my-20">

            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100vw"}
                height={"80vh"}
                />
        </div>
    );
};

export default Statistics;