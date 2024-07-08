import React from "react";
import Dollar from "@/components/icons/Dollar";
import Image from "next/image";

const Summary = () => {
  return (
    <div className="px-5 py-6">
      <div className="flex justify-between space-x-6">
        {/* First Div */}
        <div className="w-[50%]">
          {/* First Card */}
          <div className="bg-app-white my-2 rounded-sm">
            <div className="space-y-2 py-3 px-6">
              <p className="text-app-dark text-xl font-extrabold">Details</p>
              <p className="text-light-green text-sm">All Fields</p>
            </div>
            <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
            <div className="divide-y divide-slate-200 space-y-4 my-4">
              <div className="flex justify-between px-6">
                <div>
                  <p className="font-medium">Name</p>
                  <p className="text-app-grey font-light w-28">Nissan GT-R</p>
                </div>
                <div>
                  <p className="font-medium">Meter</p>
                  <p className="text-app-grey font-light">92.256miles</p>
                </div>
                <div className="mr-10">
                  <p className="font-medium">Plate No.</p>
                  <p className="text-app-grey font-light">KRN28FHZ</p>
                </div>
              </div>
              <div className="flex justify-between px-6">
                <div>
                  <p className="font-medium">VIN</p>
                  <p className="text-app-grey font-light w-16">
                    WBA3X9C58ED400194
                  </p>
                </div>
                <div>
                  <p className="font-medium">Type</p>
                  <p className="text-app-grey font-light">SUV</p>
                </div>
                <div className="mr-12">
                  <p className="font-medium">Status</p>
                  <p className="text-app-grey font-light">Available</p>
                </div>
              </div>
              <div className="flex justify-between px-6 pb-6">
                <div>
                  <p className="font-medium">Year</p>
                  <p className="text-app-grey font-light w-24">2009</p>
                </div>
                <div>
                  <p className="font-medium">Make</p>
                  <p className="text-app-grey font-light">Nissan</p>
                </div>
                <div className="ml-4">
                  <p className="font-medium">Model</p>
                  <p className="text-app-grey font-light">Nissan Pathfinder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-app-white my-2 rounded-sm">
            <div className="space-y-2 py-3 px-6">
              <p className="text-app-dark text-xl font-extrabold">
                Current Customer
              </p>
            </div>
            <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
            <div className="divide-y divide-slate-200 space-y-4 my-4">
              <div className="flex justify-between px-6">
                <div>
                  <p className="font-medium">FullName</p>
                  <p className="text-app-grey font-light">Jamie Foxx</p>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-app-grey font-light">07054232123</p>
                </div>
                <div>
                  <p className="font-medium"> Driver License No.</p>
                  <p className="text-app-grey font-light">7805776989</p>
                </div>
              </div>
              <div className="flex justify-between px-6 pb-8">
                <div>
                  <p className="font-medium">Check-Out Date</p>
                  <p className="text-app-grey font-light">3/3/2022</p>
                </div>
                <div className="w-72">
                  <p className="font-medium">Check-In Date</p>
                  <p className="text-app-grey font-light">3/4/2022</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="bg-app-white my-2 rounded-sm">
            <div className="space-y-2 py-3 px-6">
              <p className="text-app-dark text-xl font-extrabold">
                Vehicle Images
              </p>
            </div>
            <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
            <div className="flex justify-between py-4 px-6">
              <div>
                <Image
                  src="/images/CarView1.png"
                  width={127}
                  height={96}
                  alt="car View 1"
                  priority
                />
              </div>
              <div>
                <Image
                  src="/images/CarView2.png"
                  width={127}
                  height={96}
                  alt="car View 2"
                  priority
                />
              </div>
              <div className="pb-8">
                <Image
                  src="/images/CarView3.png"
                  width={127}
                  height={96}
                  alt="car View 3"
                  priority
                />
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
          <div className="px-8 space-y-5 py-8">
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
              <p className="text-app-grey font-light">
                Total Miscellaneous Charges
              </p>
              <p className="font-medium text-app-darkGray">₦42,000</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-light">
                Total No. of Reservations
              </p>
              <p className="font-medium text-app-darkGray">5</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-light">Pending Payment</p>
              <p className="font-medium text-app-darkGray">₦42,000</p>
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
            <div className="flex justify-between">
              <p className="text-app-grey font-light">Estimated Total</p>
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

export default Summary;
