//@ts-nocheck
import React, { useMemo } from "react";
import { Driver } from "@/utils/types";
import { useRouter } from "next/navigation";
import { createColumnHelper } from "@tanstack/react-table";
import { PaginatedTable } from "@/components/molecules/PaginatedTable";
import { StatusPill } from "@/components/UI/StatusPill";
import { ActionsPopOver } from "@/components/molecules/ActionsPopOver";
import Image from "next/image";

const columnHelper = createColumnHelper<Driver>();

const DriverTable = ({ data }) => {
  const router = useRouter();

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: () => "SN",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("full_name", {
        header: () => "Full Name",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("phone", {
        header: () => "Phone",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("licenseNo", {
        header: () => "License No",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("issue_date", {
        header: () => "Issue Date",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("exp_date", {
        header: () => "Exp Date",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("image", {
        header: () => "Image",
        cell: (info) => (
          <Image src={info.getValue()} width={20} height={20} alt="" />
        ),
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
              editFunc={() => {
                router.push(
                  `/dashboard/drivers/edit-driver/${row?.original?.id}`
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

export default DriverTable;
