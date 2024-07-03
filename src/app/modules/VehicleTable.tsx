//@ts-nocheck
import React, { useMemo } from "react";
import { Vehicle } from "@/utils/types";
import { useRouter } from "next/navigation";
import { createColumnHelper } from "@tanstack/react-table";
import { PaginatedTable } from "@/components/molecules/PaginatedTable";
import { StatusPill } from "@/components/UI/StatusPill";
import { ActionsPopOver } from "@/components/molecules/ActionsPopOver";

const columnHelper = createColumnHelper<Vehicle>();

const VehicleTable = ({ data }) => {
  const router = useRouter();

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: () => "SN",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("license_no", {
        header: () => "License No",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("color", {
        header: () => "Color",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("make", {
        header: () => "Make",
        cell: (info) => <p className="uppercase"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("model", {
        header: () => "Model",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("status", {
        header: () => "Status",
        cell: (info) => <StatusPill value={info.getValue()} />,
      }),
      columnHelper.accessor("vehicle_type", {
        header: () => "Vehicle Type",
        cell: (info) => <p className="uppercase"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("vin", {
        header: () => "VIN",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("fuel_type", {
        header: () => "Fuel Type",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("action", {
        header: () => "Actions",
        cell: ({ row }) => {
          return (
            <ActionsPopOver
              detailsFunc={() => {
                router.push(
                  `/dashboard/vehicles/vehicle-details/${row?.original?.id}`
                );
              }}
              delFunc={() => {
                router.push("/");
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

export default VehicleTable;
