import React from "react";

const Insurance = () => {
  return (
    <div className="px-5 py-6">
      <div className="bg-app-white my-2 rounded-sm">
        <div className="space-y-2 py-3 px-6">
          <p className="text-app-dark text-xl font-extrabold">
            License & Insurance Information
          </p>
        </div>
        <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
        <div className="divide-y divide-slate-200 space-y-4 my-4">
          <div className="flex justify-between px-6 py-4">
            <div>
              <p className="font-medium">Insurance Amount</p>
              <p className="text-app-grey font-light">₦0:00</p>
            </div>
            <div>
              <p className="font-medium">Insurance Company</p>
              <p className="text-app-grey font-light">AIICO Insurance</p>
            </div>
            <div>
              <p className="font-medium">Insurance Duration</p>
              <p className="text-app-grey font-light">1 year</p>
            </div>

            <div>
              <p className="font-medium">Insurance Start Date</p>
              <p className="text-app-grey font-light">6/12/2024</p>
            </div>
            <div>
              <p className="font-medium">Insurance Expiry</p>
              <p className="text-app-grey font-light">6/12/2025</p>
            </div>
          </div>
          <div className="flex justify-between px-6 py-4">
            <div className="">
              <p className="font-medium">License Issuing State</p>
              <p className="text-app-grey font-light">Lagos State</p>
            </div>
            <div className="">
              <p className="font-medium">License Issuing Date</p>
              <p className="text-app-grey font-light">01/01/2024</p>
            </div>
            <div>
              <p className="font-medium">License Expiry Date</p>
              <p className="text-app-grey font-light">6/12/2024</p>
            </div>
            <div>
              <p className="font-medium">Road Tax Expiry</p>
              <p className="text-app-grey font-light">12/12/2024</p>
            </div>
            <div>
              <p className="font-medium">Issuing Body</p>
              <p className="text-app-grey font-light">FRSC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
