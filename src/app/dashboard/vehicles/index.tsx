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
  const router = useRouter();
  const vData = useMemo(() => {
    if (searchValue) {
      return vehicleData?.filter((singleData: any) => {
        return singleData?.vin
          ?.toLowerCase()
          ?.includes(searchValue?.toLowerCase());
      });
    } else {
      return vehicleData;
    }
  }, [searchValue, vehicleData]);

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
                router.push("/");
              }}
              className="bg-dark-grey flex items-center cursor-pointer space-x-6 text-app-white border border-dotted rounded-xl py-2 px-10"
            >
              <Add fill="#fff" />
              <p>Add Vehicle</p>
            </div>
          </div>
          <div className="flex items-center px-5 py-3">
            <SearchInput
              placeholder="Search VIN"
              setSearchValue={setSearchValue}
            />
          </div>
          <div>
            <VehicleTable data={vData} />
            {vData?.length < 1 && (
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
