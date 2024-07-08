//@ts-nocheck
import React, { useMemo } from "react";
import { Reservations } from "@/utils/types";
import { createColumnHelper } from "@tanstack/react-table";
import { PaginatedTable } from "@/components/molecules/PaginatedTable";
import { StatusPill } from "@/components/UI/StatusPill";

const columnHelper = createColumnHelper<Reservations>();

const ReservationTable = ({ data }) => {
  const columns = useMemo(
    () => [
      columnHelper.accessor("reservationNo", {
        header: () => "Reservation No.",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("id", {
        header: () => "Vehicle No.",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("type", {
        header: () => "Vehicle Type",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("name", {
        header: () => "Customer Name",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("phone", {
        header: () => "Phone",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),

      columnHelper.accessor("checkout", {
        header: () => "Checkout Date",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("checkin", {
        header: () => "Check In Date",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("created", {
        header: () => "Created By",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("status", {
        header: () => "Status",
        cell: (info) => <StatusPill value={info.getValue()} />,
      }),
      columnHelper.accessor("reservationType", {
        header: () => "Reservation Type",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
    ],
    []
  );

  return (
    <>
      {data?.length > 0 && (
        <div className="relative mb-4">
          <PaginatedTable tableData={data} columns={columns} />
        </div>
      )}
    </>
  );
};

export default ReservationTable;
