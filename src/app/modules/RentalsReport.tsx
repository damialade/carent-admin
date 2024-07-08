//@ts-nocheck
import React from "react";

const RentalsReport = () => {
  const rentalsData = [
    {
      id: 1,
      name: "Reservation Report",
    },
    {
      id: 2,
      name: "Damage Report",
    },
    {
      id: 3,
      name: "Reservation Quote Report",
    },
  ];

  return (
    <div className="text-app-white my-5">
      {rentalsData.map((rData, i) => (
        <div key={i} className="flex justify-between space-y-5 px-4">
          <p className="font-medium text-lg">{rData?.name}</p>
          <button className="bg-btn-green px-3 py-2 rounded-lg">
            Generate
          </button>
        </div>
      ))}
    </div>
  );
};

export default RentalsReport;
