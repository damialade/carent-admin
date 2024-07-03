//@ts-nocheck
import React, { useMemo } from "react";
import { VehicleDetails } from "@/utils/types";
import { createColumnHelper } from "@tanstack/react-table";
import { PaginatedTable } from "@/components/molecules/PaginatedTable";

const columnHelper = createColumnHelper<VehicleDetails>();

const AgreementTrackTable = () => {
  let data = require("../dashboard/vehicles/vehicleDetails.json");

  const columns = useMemo(
    () => [
      columnHelper.accessor("employeeName", {
        header: () => "Employee Name",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("agreementNo", {
        header: () => "Agreement No.",
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor("purpose", {
        header: () => "Purpose",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("pickupTime", {
        header: () => "PickUp Time",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("dropupTime", {
        header: () => "DropUp Time",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("odometerOut", {
        header: () => "Odometer Out",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("odometerIn", {
        header: () => "Odometer In",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("customerName", {
        header: () => "Customer Name",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("fuelOut", {
        header: () => "Fuel Out",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("fuelIn", {
        header: () => "Fuel In",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
    ],
    []
  );

  return (
    <>
      <div className="py-3 px-6">
        <p className="text-app-white text-3xl font-extrabold">
          Agreeement Track
        </p>
      </div>
      {data?.length > 0 && (
        <div className="relative mb-4">
          <PaginatedTable tableData={data} columns={columns} />
        </div>
      )}
      {data?.length < 1 && (
        <div className="flex justify-center mt-36">
          <p className="font-medium text-xl text-app-green text-center mb-6 block">
            No Agreement History Found for this vehicle
          </p>
        </div>
      )}
    </>
  );
};

export default AgreementTrackTable;
