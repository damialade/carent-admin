import React from "react";

const OtherInfo = () => {
  return (
    <div className="px-5 py-6">
      <div className="bg-app-white my-2 rounded-sm">
        <div className="space-y-2 py-3 px-6">
          <p className="text-app-dark text-xl font-extrabold">
            Other Information
          </p>
        </div>
        <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
        <div className="flex justify-between px-6 py-4">
          <div>
            <p className="font-medium">MOT Test Expiry</p>
            <p className="text-app-grey font-light">-</p>
          </div>
          <div>
            <p className="font-medium">PHV Expiry</p>
            <p className="text-app-grey font-light">-</p>
          </div>
          <div className="">
            <p className="font-medium">Rate</p>
            <p className="text-app-grey font-light">-</p>
          </div>
          <div className="">
            <p className="font-medium">Additional Expense</p>
            <p className="text-app-grey font-light">₦0:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
