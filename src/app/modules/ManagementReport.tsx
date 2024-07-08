//@ts-nocheck
import React from "react";

const ManagementReport = () => {
  const managementData = [
    {
      id: 1,
      name: "Financial Summary",
    },
    {
      id: 2,
      name: "Agreement Summary Report",
    },
    {
      id: 3,
      name: "Referral Report",
    },
    {
      id: 4,
      name: "Payment Due",
    },
    {
      id: 5,
      name: "Returned Contracts",
    },
    {
      id: 6,
      name: "Earnings Breakdown",
    },
  ];

  return (
    <div className="text-app-white my-5">
      {managementData.map((mData, i) => (
        <div key={i} className="flex justify-between space-y-5 px-4">
          <p className="font-medium text-lg">{mData?.name}</p>
          <button className="bg-btn-green px-3 py-2 rounded-lg">
            Generate
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManagementReport;
