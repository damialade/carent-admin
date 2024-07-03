import React from "react";

const Options = () => {
  return (
    <div className="px-5 py-6">
      <div className="bg-app-white my-2 rounded-sm">
        <div className="space-y-2 py-3 px-6">
          <p className="text-app-dark text-xl font-extrabold">
            Vehicle Options
          </p>
        </div>
        <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
        <div className="divide-y divide-slate-200 space-y-4 my-4">
          <div className="flex space-x-8 px-6 py-4">
            <div className="flex items-center">
              <input
                defaultChecked
                type="checkbox"
                className="text-btn-green rounded-md accent-btn-green ring-app-green"
              />
              <p className="font-medium text-app-darkGray">GPS Tracker</p>
            </div>
            <div className="flex items-center">
              <input
                defaultChecked
                type="checkbox"
                className="text-btn-green rounded-md accent-btn-green ring-app-green"
              />
              <p className="font-medium text-app-darkGray">X Box</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
