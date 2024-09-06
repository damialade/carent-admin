//@ts-nocheck
"use client";
import WithSideBar from "@/components/Layout/WithSideBar";
import React, { Fragment, useState, useMemo } from "react";
import customerData from "./customer.json";
import SearchInput from "@/components/atoms/SearchInput";
import { useRouter } from "next/navigation";
import Add from "@/components/icons/Add";
import CustomerTable from "@/modules/CustomerTable";

const Customers = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selection, setSelection] = useState("All");
  const router = useRouter();
  const filterFunc = () => {
    if (selection === "All") {
      return customerData;
    }
    if (selection === "Active") {
      return customerData?.filter((singleData: any) => {
        return singleData?.status === "Active";
      });
    }
    if (selection === "Inactive") {
      return customerData?.filter((singleData: any) => {
        return singleData?.status === "Inactive";
      });
    }
  };

  const memoizedCustomerData = useMemo(() => {
    const filteredData = filterFunc();

    if (searchValue) {
      return filteredData?.filter((singleData: any) => {
        return singleData?.customerName
          ?.toLowerCase()
          ?.includes(searchValue?.toLowerCase());
      });
    } else {
      return filteredData;
    }
  });

  return (
    <Fragment>
      <WithSideBar>
        <div>
          <div className="flex justify-between">
            <div className="px-3">
              <p className="text-app-white text-3xl font-extrabold">
                All Customers
              </p>
            </div>
            <div
              onClick={() => {
                router.push("/dashboard/customers/add-customer");
              }}
              className="bg-dark-grey flex items-center cursor-pointer space-x-6 text-app-white border border-dotted rounded-xl py-2 px-10"
            >
              <Add fill="#fff" />
              <p>Add Customer</p>
            </div>
          </div>
          <div className="py-4 px-3 space-x-3">
            <button
              onClick={() => {
                setSelection("All");
              }}
              className={`border-2 rounded-md p-2 ${
                selection === "All" ? "bg-btn-green" : "bg-dark-grey"
              } text-white hover:text-lg`}
            >
              All
            </button>
            <button
              onClick={() => {
                setSelection("Active");
              }}
              className={`border-2 rounded-md p-2 ${
                selection === "Active" ? "bg-btn-green" : "bg-dark-grey"
              } text-white hover:text-lg`}
            >
              Active
            </button>
            <button
              onClick={() => {
                setSelection("Inactive");
              }}
              className={`border-2 rounded-md p-2 ${
                selection === "Inactive" ? "bg-btn-green" : "bg-dark-grey"
              } text-white hover:text-lg`}
            >
              Inactive
            </button>
          </div>
          <div className="flex items-center px-5 py-3">
            <SearchInput
              placeholder="Search Customer Name"
              setSearchValue={setSearchValue}
            />
          </div>
          <div>
            <CustomerTable data={memoizedCustomerData} />
            {memoizedCustomerData?.length < 1 && (
              <div className="flex justify-center mt-36">
                <p className="font-medium text-xl text-app-green text-center mb-6 block">
                  No Customer Found
                </p>
              </div>
            )}
          </div>
        </div>
      </WithSideBar>
    </Fragment>
  );
};

export default Customers;
