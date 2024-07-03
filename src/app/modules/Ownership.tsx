import React from "react";

const Ownership = () => {
  return (
    <div className="px-5 py-6">
      <div className="bg-app-white my-2 rounded-sm">
        <div className="space-y-2 py-3 px-6">
          <p className="text-app-dark text-xl font-extrabold">
            Ownership Information
          </p>
        </div>
        <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
        <div className="divide-y divide-slate-200 space-y-4 my-4">
          <div className="flex justify-between px-6 py-4">
            <div>
              <p className="font-medium">Leasing Company</p>
              <p className="text-app-grey font-light">WellsFargo Leasing</p>
            </div>
            <div>
              <p className="font-medium">Lease Amount</p>
              <p className="text-app-grey font-light">₦0.00</p>
            </div>
            <div className="">
              <p className="font-medium">Deposit</p>
              <p className="text-app-grey font-light">₦4,800,000</p>
            </div>
            <div className="">
              <p className="font-medium">Lease Term</p>
              <p className="text-app-grey font-light">3 months</p>
            </div>
            <div>
              <p className="font-medium">Lease Expiry</p>
              <p className="text-app-grey font-light">10/12/2025</p>
            </div>
          </div>
          <div className="flex justify-between px-6 py-4">
            <div>
              <p className="font-medium">In-Service Date</p>
              <p className="text-app-grey font-light">09/08/2024</p>
            </div>
            <div>
              <p className="font-medium">Purchase Date</p>
              <p className="text-app-grey font-light">08/06/2024</p>
            </div>
            <div className="">
              <p className="font-medium">Purchase Amount</p>
              <p className="text-app-grey font-light">₦4,800,000</p>
            </div>
            <div className="">
              <p className="font-medium">Depreciation</p>
              <p className="text-app-grey font-light">0%</p>
            </div>
            <div>
              <p className="font-medium">Interest</p>
              <p className="text-app-grey font-light">0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ownership;
