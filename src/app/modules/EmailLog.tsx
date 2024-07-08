//@ts-nocheck
import React, { useMemo, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { PaginatedTable } from "@/components/molecules/PaginatedTable";
import DocumentModal from "@/components/molecules/DocumentModal";
import { Reservations } from "@/utils/types";
import { StatusPill } from "@/components/UI/StatusPill";

const columnHelper = createColumnHelper<Reservations>();

const EmailLog = () => {
  let data = require("../dashboard/vehicles/vehicleReservation.json");

  const columns = useMemo(
    () => [
      columnHelper.accessor("subject", {
        header: () => "Subject",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("sent", {
        header: () => "Sent To",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),

      columnHelper.accessor("time", {
        header: () => "Delivery Time",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("emailStatus", {
        header: () => "Status",
        cell: (info) => <StatusPill value={info.getValue()} />,
      }),
    ],
    []
  );

  return (
    <>
      <div className=" flex justify-between py-3 px-6">
        <p className="text-app-white text-3xl font-extrabold">Email Log</p>
      </div>

      {data?.length > 0 && (
        <div className="relative mb-4">
          <PaginatedTable tableData={data} columns={columns} />
        </div>
      )}
      {data?.length < 1 && (
        <div className="flex justify-center mt-36">
          <p className="font-medium text-xl text-app-green text-center mb-6 block">
            No Email Log Found for this Reservation
          </p>
        </div>
      )}
    </>
  );
};

export default EmailLog;
