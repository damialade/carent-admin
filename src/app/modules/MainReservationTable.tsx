//@ts-nocheck
import React, { useMemo } from "react";
import { Reservations } from "@/utils/types";
import { useRouter } from "next/navigation";
import { createColumnHelper } from "@tanstack/react-table";
import { PaginatedTable } from "@/components/molecules/PaginatedTable";
import { ActionsPopOver } from "@/components/molecules/ActionsPopOver";
import { StatusPill } from "@/components/UI/StatusPill";

const columnHelper = createColumnHelper<Reservations>();

const MainReservationTable = ({ data }) => {
  const router = useRouter();

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: () => "SN",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("customer", {
        header: () => "Customer Name",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("reservation-type", {
        header: () => "Reservation Type",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("vehicle-id", {
        header: () => "Vehicle ID",
        cell: (info) => <p> {info.getValue()}</p>,
      }),

      columnHelper.accessor("vehicle-type", {
        header: () => "Vehicle Type",
        cell: (info) => <p className="uppercase"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("vehicle-license_no", {
        header: () => "VIN",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("checkin-date", {
        header: () => "Checkin Date",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("checkout-date", {
        header: () => "Checkout Date",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("branch", {
        header: () => "Checkin Location",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("status", {
        header: () => "Status",
        cell: (info) => <StatusPill value={info.getValue()} />,
      }),
      columnHelper.accessor("action", {
        header: () => "Actions",
        cell: ({ row }) => {
          return (
            <ActionsPopOver
              detailsFunc={() => {
                router.push(
                  `/dashboard/reservations/reservation-details/${row?.original?.id}`
                );
              }}
              editFunc={() => {
                router.push(
                  `/dashboard/reservations/edit-reservation/${row?.original?.id}`
                );
              }}
            />
          );
        },
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

export default MainReservationTable;
