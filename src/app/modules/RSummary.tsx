import React from "react";
import Dollar from "@/components/icons/Dollar";
import Image from "next/image";

const RSummary = () => {
  return (
    <div className="px-5 py-6">
      <div className="flex justify-between space-x-6">
        {/* First Div */}
        <div className="w-[50%]">
          {/* First Card */}
          <div className="bg-app-white my-2 rounded-sm">
            <div className="space-y-2 py-3 px-6">
              <p className="text-app-dark text-xl font-extrabold">
                Customer Information
              </p>
            </div>
            <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
            <div className="divide-y divide-slate-200 space-y-4 my-4">
              <div className="flex justify-between px-6">
                <div>
                  <p className="font-medium">Full Name</p>
                  <p className="text-app-grey font-light w-28">
                    Laju Iren Fanny
                  </p>
                </div>
                <div>
                  <p className="font-medium">Phone Number</p>
                  <p className="text-app-grey font-light">08056783567</p>
                </div>
                <div className="mr-10">
                  <p className="font-medium">Email</p>
                  <p className="text-app-grey font-light">
                    fannyiren23@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex justify-between px-6 pb-6">
                <div>
                  <p className="font-medium">Date of Birth</p>
                  <p className="text-app-grey font-light w-16">3/19/1996</p>
                </div>
                <div>
                  <p className="font-medium">Sex</p>
                  <p className="text-app-grey font-light">Female</p>
                </div>
                <div className="mr-12">
                  <p className="font-medium">License No.</p>
                  <p className="text-app-grey font-light">WA1CYBFE4AD159130</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-app-white my-2 rounded-sm">
            <div className="space-y-2 py-3 px-6">
              <p className="text-app-dark text-xl font-extrabold">
                Rental Information
              </p>
            </div>
            <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
            <div className="divide-y divide-slate-200 space-y-4 my-4">
              <div className="flex justify-between px-6">
                <div>
                  <p className="font-medium">Total No. of Days</p>
                  <p className="text-app-grey font-light">4</p>
                </div>
                <div>
                  <p className="font-medium">Reservation Type</p>
                  <p className="text-app-grey font-light">Online</p>
                </div>
                <div>
                  <p className="font-medium"> Travel Type</p>
                  <p className="text-app-grey font-light">InterState</p>
                </div>
              </div>

              <div className="flex justify-between px-6 pb-6">
                <div>
                  <p className="font-medium">Vehicle Type</p>
                  <p className="text-app-grey font-light">Compact</p>
                </div>
                <div>
                  <p className="font-medium">Check-Out Date</p>
                  <p className="text-app-grey font-light">29/3/2023</p>
                </div>
                <div className="">
                  <p className="font-medium">Check-In Date</p>
                  <p className="text-app-grey font-light">3/4/2024</p>
                </div>
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="bg-app-white my-2 rounded-sm">
            <div className="space-y-2 py-3 px-6">
              <p className="text-app-dark text-xl font-extrabold">
                Vehicle Information
              </p>
            </div>
            <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
            <div className="divide-y divide-slate-200 space-y-4 my-4">
              <div className="flex justify-between px-6">
                <div>
                  <p className="font-medium">Model</p>
                  <p className="text-app-grey font-light">Nissan</p>
                </div>
                <div>
                  <p className="font-medium">Type</p>
                  <p className="text-app-grey font-light">Sedan</p>
                </div>
                <div>
                  <p className="font-medium"> Color</p>
                  <p className="text-app-grey font-light">Red</p>
                </div>
              </div>

              <div className="flex justify-between px-6 pb-6">
                <div>
                  <p className="font-medium">License Number</p>
                  <p className="text-app-grey font-light">WBA3X9C58ED400194</p>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Div */}
        <div className="bg-app-white my-2 rounded-sm w-[50%]">
          <div className="flex space-x-4 items-center py-6 px-6">
            <Dollar />
            <p className="text-app-dark text-xl mt-1 font-extrabold">
              Summary of Charges
            </p>
          </div>
          <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
          <div className="px-8 space-y-3 py-4">
            <div className="flex justify-between">
              <p className="text-app-grey font-light">Base Rate</p>
              <p className="font-medium text-app-darkGray">₦40,000</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-light">Total Expense</p>
              <p className="font-medium text-app-darkGray">₦10,000</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-light">Total Profit</p>
              <p className="font-medium text-app-darkGray">₦30,000</p>
            </div>

            <div className="flex justify-between">
              <p className="text-app-grey font-light">Discount</p>
              <p className="font-medium text-app-darkGray">₦4,000</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-light">SubTotal</p>
              <p className="font-medium text-app-darkGray">₦36,000</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-light">Additional Charges</p>
              <p className="font-medium text-app-darkGray">₦0</p>
            </div>

            <hr />
            <div className="flex justify-between">
              <p className="text-app-grey font-medium">Grand Total</p>
              <p className="font-medium text-app-darkGray">₦0:00</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="text-app-grey font-normal">Advance Paid</p>
              <p className="font-medium text-app-darkGray">₦0:00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-normal">Balance Due</p>
              <p className="font-medium text-app-darkGray">₦0:00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-normal">Cancellation Fee</p>
              <p className="font-medium text-app-darkGray">₦0:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSummary;
