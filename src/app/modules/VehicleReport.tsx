//@ts-nocheck
import React from "react";

const VehicleReport = () => {
  const vehicleData = [
    {
      id: 1,
      name: "Fleet Summary",
    },
    {
      id: 2,
      name: "Vehicle License & Insurance",
    },
    {
      id: 3,
      name: "Idle Cars Report",
    },
    {
      id: 4,
      name: "Maintenance Report",
    },
  ];

  return (
    <div className="text-app-white my-5">
      {vehicleData.map((vData, i) => (
        <div key={i} className="flex justify-between space-y-5 px-4">
          <p className="font-medium text-lg">{vData?.name}</p>
          <button className="bg-btn-green px-3 py-2 rounded-lg">
            Generate
          </button>
        </div>
      ))}
    </div>
  );
};

export default VehicleReport;
