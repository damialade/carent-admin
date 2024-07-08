//@ts-nocheck
import React, { useMemo } from "react";
import { VehicleDetails } from "@/utils/types";
import { createColumnHelper } from "@tanstack/react-table";
import { PaginatedTable } from "@/components/molecules/PaginatedTable";

const columnHelper = createColumnHelper<VehicleDetails>();

const DamagesTable = () => {
  let data = require("../dashboard/vehicles/vehicleDetails.json");

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: () => "S/N.",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("type", {
        header: () => "Damage Type",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),

      columnHelper.accessor("damagedDate", {
        header: () => "Damage Date",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("desc", {
        header: () => "Description",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
    ],
    []
  );

  return (
    <>
      <div className="py-3 px-6">
        <p className="text-app-white text-3xl font-extrabold">Damages</p>
      </div>
      {data?.length > 0 && (
        <div className="relative mb-4">
          <PaginatedTable tableData={data} columns={columns} />
        </div>
      )}
      {data?.length < 1 && (
        <div className="flex justify-center mt-36">
          <p className="font-medium text-xl text-app-green text-center mb-6 block">
            No Damage History Found for this vehicle
          </p>
        </div>
      )}
    </>
  );
};

export default DamagesTable;
