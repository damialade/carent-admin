//@ts-nocheck
"use client";
import WithSideBar from "@/components/Layout/WithSideBar";
import VehicleTable from "@/modules/VehicleTable";
import React, { Fragment, useState, useMemo } from "react";
import vehicleData from "./vehicle.json";
import SearchInput from "@/components/atoms/SearchInput";
import { useRouter } from "next/navigation";
import Add from "@/components/icons/Add";

const Vehicle = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selection, setSelection] = useState("All");
  const router = useRouter();
  const filterFunc = () => {
    if (selection === "All") {
      return vehicleData;
    }
    if (selection === "Rented") {
      return vehicleData?.filter((singleData: any) => {
        return singleData?.status === "Rented";
      });
    }
    if (selection === "Available") {
      return vehicleData?.filter((singleData: any) => {
        return singleData?.status === "Available";
      });
    }
    if (selection === "Archived") {
      return vehicleData?.filter((singleData: any) => {
        return (
          singleData?.status === "Accident" ||
          singleData?.status === "In-Service"
        );
      });
    }
    //put the other if checks here for the different buttons
  };

  const memoizedVehicleData = useMemo(() => {
    const filteredData = filterFunc();

    if (searchValue) {
      return filteredData?.filter((singleData: any) => {
        return singleData?.vin
          ?.toLowerCase()
          ?.includes(searchValue?.toLowerCase());
      });
    } else {
      return filteredData;
    }
  }, []);

  return (
    <Fragment>
      <WithSideBar>
        <div>
          <div className="flex justify-between">
            <div className="px-3">
              <p className="text-app-white text-3xl font-extrabold">
                All Vehicles
              </p>
            </div>
            <div
              onClick={() => {
                router.push("/dashboard/vehicles/add-vehicle");
              }}
              className="bg-dark-grey flex items-center cursor-pointer space-x-6 text-app-white border border-dotted rounded-xl py-2 px-10"
            >
              <Add fill="#fff" />
              <p>Add Vehicle</p>
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
                setSelection("Rented");
              }}
              className={`border-2 rounded-md p-2 ${
                selection === "Rented" ? "bg-btn-green" : "bg-dark-grey"
              } text-white hover:text-lg`}
            >
              Assigned
            </button>
            <button
              onClick={() => {
                setSelection("Available");
              }}
              className={`border-2 rounded-md p-2 ${
                selection === "Available" ? "bg-btn-green" : "bg-dark-grey"
              } text-white hover:text-lg`}
            >
              Unassigned
            </button>
            <button
              onClick={() => {
                setSelection("Archived");
              }}
              className={`border-2 rounded-md p-2 ${
                selection === "Archived" ? "bg-btn-green" : "bg-dark-grey"
              } text-white hover:text-lg`}
            >
              Archived
            </button>
          </div>
          <div className="flex items-center px-5 py-3">
            <SearchInput
              placeholder="Search VIN"
              setSearchValue={setSearchValue}
            />
          </div>
          <div>
            <VehicleTable data={memoizedVehicleData} />
            {memoizedVehicleData?.length < 1 && (
              <div className="flex justify-center mt-36">
                <p className="font-medium text-xl text-app-green text-center mb-6 block">
                  No Vehicle Found
                </p>
              </div>
            )}
          </div>
        </div>
      </WithSideBar>
    </Fragment>
  );
};

export default Vehicle;
