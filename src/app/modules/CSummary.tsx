import React from "react";
import Dollar from "@/components/icons/Dollar";

const CSummary = () => {
  return (
    <div className="px-5 py-6">
      <div className="flex justify-between space-x-6">
        {/* First Div */}
        <div className="w-[50%]">
          {/* First Card */}
          <div className="bg-app-white my-2 rounded-sm">
            <div className="space-y-2 py-3 px-6">
              <p className="text-app-dark text-xl font-extrabold">
                Personal Information
              </p>
            </div>
            <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
            <div className="divide-y divide-slate-200 space-y-4 my-4">
              <div className="flex justify-between px-6">
                <div>
                  <p className="font-medium">Full Name</p>
                  <p className="text-app-grey font-light">Michelle Nkumah</p>
                </div>
                <div>
                  <p className="font-medium">Phone Number</p>
                  <p className="text-app-grey font-light">08056783567</p>
                </div>
                <div className="">
                  <p className="font-medium">Email</p>
                  <p className="text-app-grey font-light">
                    fannyiren23@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex justify-between px-6">
                <div>
                  <p className="font-medium">Date of Birth</p>
                  <p className="text-app-grey font-light w-16">3/19/1996</p>
                </div>
                <div>
                  <p className="font-medium">Sex</p>
                  <p className="text-app-grey font-light">Female</p>
                </div>
                <div className="">
                  <p className="font-medium">License No.</p>
                  <p className="text-app-grey font-light">WA1CYBFE4AD159130</p>
                </div>
              </div>
              <div className="flex justify-between px-6 pb-6">
                <div>
                  <p className="font-medium">Emergency Name</p>
                  <p className="text-app-grey font-light w-28">
                    Janelle Nkumah
                  </p>
                </div>
                <div>
                  <p className="font-medium">Emergency Phone</p>
                  <p className="text-app-grey font-light">08056783567</p>
                </div>
                <div className="mr-10">
                  <p className="font-medium">Address</p>
                  <p className="text-app-grey font-light">
                    12, Adeola Odeku VI
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-app-white my-2 rounded-sm">
            <div className="space-y-2 py-3 px-6">
              <p className="text-app-dark text-xl font-extrabold">
                License & Insurance Information
              </p>
            </div>
            <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
            <div className="divide-y divide-slate-200 space-y-4 my-4">
              <div className="flex justify-between px-6">
                <div>
                  <p className="font-medium">Insurance Company</p>
                  <p className="text-app-grey font-light">Leadway Insurance</p>
                </div>
                <div>
                  <p className="font-medium">Policy No.</p>
                  <p className="text-app-grey font-light">12345</p>
                </div>
                <div>
                  <p className="font-medium">Insurance Exp. Date</p>
                  <p className="text-app-grey font-light">12/12/2023</p>
                </div>
              </div>

              <div className="flex justify-between px-6 pb-6">
                <div>
                  <p className="font-medium">Issuing State</p>
                  <p className="text-app-grey font-light">Lagos</p>
                </div>
                <div>
                  <p className="font-medium">Issuing Country</p>
                  <p className="text-app-grey font-light">Nigeria</p>
                </div>
                <div className="">
                  <p className="font-medium">Check-In Date</p>
                  <p className="text-app-grey font-light">3/4/2024</p>
                </div>
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
              <p className="text-app-grey font-light">Total Revenue</p>
              <p className="font-medium text-app-darkGray">₦40,000</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-light">Opened Reservation</p>
              <p className="font-medium text-app-darkGray">1</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-light">Confirmed Reservation</p>
              <p className="font-medium text-app-darkGray">1</p>
            </div>

            <div className="flex justify-between">
              <p className="text-app-grey font-light">No Show Reservations</p>
              <p className="font-medium text-app-darkGray">0</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-light">Cancelled Reservations</p>
              <p className="font-medium text-app-darkGray">0</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-light">Opened Agreements</p>
              <p className="font-medium text-app-darkGray">2</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-light">Closed Agreements</p>
              <p className="font-medium text-app-darkGray">1</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-light">Total Traffic Tickets</p>
              <p className="font-medium text-app-darkGray">0</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-light">Pending Payments</p>
              <p className="font-medium text-app-darkGray">1</p>
            </div>
            <div className="flex justify-between">
              <p className="text-app-grey font-light">Pending Deposits</p>
              <p className="font-medium text-app-darkGray">1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSummary;
