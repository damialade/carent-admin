import React from "react";

const General = () => {
  return (
    <div className="px-5 py-6">
      <div className="bg-app-white my-2 rounded-sm">
        <div className="space-y-2 py-3 px-6">
          <p className="text-app-dark text-xl font-extrabold">
            General Information
          </p>
        </div>
        <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
        <div className="flex justify-between px-6 py-4">
          <div>
            <p className="font-medium">Doors</p>
            <p className="text-app-grey font-light">4</p>
          </div>
          <div>
            <p className="font-medium">Cylinders</p>
            <p className="text-app-grey font-light">3</p>
          </div>
          <div className="">
            <p className="font-medium">Tank Size</p>
            <p className="text-app-grey font-light">48</p>
          </div>
          <div className="">
            <p className="font-medium">Fuel Type</p>
            <p className="text-app-grey font-light">Petrol</p>
          </div>
          <div>
            <p className="font-medium">Engine Type</p>
            <p className="text-app-grey font-light">V6</p>
          </div>
          <div>
            <p className="font-medium">Transmission</p>
            <p className="text-app-grey font-light">Automatic</p>
          </div>
          <div>
            <p className="font-medium">Original Odometer</p>
            <p className="text-app-grey font-light">10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
