//@ts-nocheck
import React from "react";

const CustomerReport = () => {
  const customerData = [
    {
      id: 1,
      name: "Customer List",
    },
    {
      id: 2,
      name: "Traffic Tickets",
    },
  ];

  return (
    <div className="text-app-white my-5">
      {customerData.map((cData, i) => (
        <div key={i} className="flex justify-between space-y-5 px-4">
          <p className="font-medium text-lg">{cData?.name}</p>
          <button className="bg-btn-green px-3 py-2 rounded-lg">
            Generate
          </button>
        </div>
      ))}
    </div>
  );
};

export default CustomerReport;
