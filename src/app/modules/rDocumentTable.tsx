//@ts-nocheck
import React, { useMemo, useState } from "react";
import { VehicleDetails } from "@/utils/types";
import { createColumnHelper } from "@tanstack/react-table";
import { PaginatedTable } from "@/components/molecules/PaginatedTable";
import DocumentModal from "@/components/molecules/DocumentModal";

const columnHelper = createColumnHelper<VehicleDetails>();

const RDocumentTable = () => {
  let data = require("../dashboard/vehicles/vehicleDetails.json");

  const columns = useMemo(
    () => [
      columnHelper.accessor("documentName", {
        header: () => "Document Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("documentType", {
        header: () => "Document Type",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),

      columnHelper.accessor("fileSize", {
        header: () => "File Size",
        cell: (info) => <p> ({info.getValue()})</p>,
      }),
      columnHelper.accessor("contentType", {
        header: () => "Content Type",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
    ],
    []
  );

  return (
    <>
      <div className=" flex justify-between py-3 px-6">
        <p className="text-app-white text-3xl font-extrabold">Documents</p>
      </div>

      {data?.length > 0 && (
        <div className="relative mb-4">
          <PaginatedTable tableData={data} columns={columns} />
        </div>
      )}
      {data?.length < 1 && (
        <div className="flex justify-center mt-36">
          <p className="font-medium text-xl text-app-green text-center mb-6 block">
            No Document Found for this vehicle
          </p>
        </div>
      )}
    </>
  );
};

export default RDocumentTable;
