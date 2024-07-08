//@ts-nocheck
import React, { useMemo } from "react";
import { Customer } from "@/utils/types";
import { createColumnHelper } from "@tanstack/react-table";
import { PaginatedTable } from "@/components/molecules/PaginatedTable";
import { StatusPill } from "@/components/UI/StatusPill";

const columnHelper = createColumnHelper<Customer>();

const DSummary = () => {
  let data = require("../dashboard/vehicles/vehicleDetails.json");

  const columns = useMemo(
    () => [
      columnHelper.accessor("paymentID", {
        header: () => "ID",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("paymentType", {
        header: () => "Payment Type",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),

      columnHelper.accessor("paymentAmt", {
        header: () => "Payment Amount",
        cell: (info) => <p> ₦{info.getValue()}</p>,
      }),
      columnHelper.accessor("paymentMethod", {
        header: () => " Payment Method",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("paymentDate", {
        header: () => " Payment Date",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("agreementNo", {
        header: () => "Agreement No",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("createdBy", {
        header: () => " Created By",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
    ],
    []
  );

  return (
    <>
      <div className=" flex justify-between py-3 px-6">
        <p className="text-app-white text-3xl font-extrabold">
          Deposit Summary
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
            No Deposit Summary for this customer
          </p>
        </div>
      )}
    </>
  );
};

export default DSummary;
