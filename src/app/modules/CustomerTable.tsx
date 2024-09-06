//@ts-nocheck
import React, { useMemo } from "react";
import { Customer } from "@/utils/types";
import { useRouter } from "next/navigation";
import { createColumnHelper } from "@tanstack/react-table";
import { PaginatedTable } from "@/components/molecules/PaginatedTable";
import { StatusPill } from "@/components/UI/StatusPill";
import { ActionsPopOver } from "@/components/molecules/ActionsPopOver";

const columnHelper = createColumnHelper<Customer>();

const CustomerTable = ({ data }) => {
  const router = useRouter();

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: () => "SN",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("customerName", {
        header: () => "Customer Name",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("customeID", {
        header: () => "Customer ID",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("email", {
        header: () => "E-mail",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("phone", {
        header: () => "P/Number",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("licenseNo", {
        header: () => "License No",
        cell: (info) => <p> {info.getValue()}</p>,
      }),

      columnHelper.accessor("licenseExp", {
        header: () => "License Expiry",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("address", {
        header: () => "Address",
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
                  `/dashboard/customers/customer-details/${row?.original?.id}`
                );
              }}
              editFunc={() => {
                router.push(
                  `/dashboard/customers/edit-customer/${row?.original?.id}`
                );
              }}
            />
          );
        },
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default CustomerTable;
