//@ts-nocheck
import React, { useMemo, useState } from "react";
import { VehicleDetails } from "@/utils/types";
import { createColumnHelper } from "@tanstack/react-table";
import { PaginatedTable } from "@/components/molecules/PaginatedTable";
import Add from "@/components/icons/Add";
import MaintenanceModal from "@/components/molecules/MaintenanceModal";
import { StatusPill } from "@/components/UI/StatusPill";

const columnHelper = createColumnHelper<VehicleDetails>();

const MaintenanceTable = () => {
  let data = require("../dashboard/vehicles/vehicleDetails.json");
  const [showModal, setShowModal] = useState(false);
  const columns = useMemo(
    () => [
      columnHelper.accessor("maintenanceName", {
        header: () => "Maintenance Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("lastServiceDate", {
        header: () => "Last Service Date",
        cell: (info) => <p> {info.getValue()}</p>,
      }),

      columnHelper.accessor("intervalMonths", {
        header: () => "Interval Months",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("maintenanceAmount", {
        header: () => "Amount",
        cell: (info) => <p> ₦{info.getValue()}</p>,
      }),
      columnHelper.accessor("nextServiceDate", {
        header: () => "Next Service Date",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("intervalMileage", {
        header: () => "Interval Mileage",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("maintenanceStatus", {
        header: () => "Status",
        cell: (info) => <StatusPill value={info.getValue()} />,
      }),
    ],
    []
  );

  return (
    <>
      <div className="py-3 px-6">
        <p className="text-app-white text-3xl font-extrabold">Maintenance</p>
      </div>
      <div className=" flex justify-between py-3 px-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-3">
            <p className="text-light-green">From:</p>
            <div className={`flex items-center -space-x-6`}>
              <input
                value=""
                type="date"
                className="w-full px-8 py-2 leading-tight text-app-white placeholder-white rounded-md shadow-lg bg-light-green border-[1px] appearance-none focus:outline-none focus:shadow-outline"
                placeholder="dd/mm/yyyy"
              />
            </div>
            <p className="text-light-green">To:</p>
            <div className={`flex items-center -space-x-6`}>
              <input
                value=""
                type="date"
                className="w-full px-8 py-2 leading-tight text-app-white placeholder-white rounded-md shadow-lg bg-light-green border-[1px] appearance-none focus:outline-none focus:shadow-outline"
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
          <button className="cursor-pointer space-x-4 text-app-white bg-btn-green py-1 px-3 rounded-md">
            GO
          </button>
        </div>

        <div className="flex items-center cursor-pointer space-x-4 text-app-white bg-btn-green py-1 px-3 rounded-md">
          <Add fill="#fff" />
          <div
            onClick={() => {
              setShowModal(true);
            }}
          >
            Create Maintenance
          </div>
        </div>
      </div>
      {/*Modal Starts Here */}
      {showModal && (
        <MaintenanceModal
          show={showModal}
          onClick={() => {
            setShowModal(false);
          }}
        />
      )}
      {/*Modal Ends Here */}
      {data?.length > 0 && (
        <div className="relative mb-4">
          <PaginatedTable tableData={data} columns={columns} />
        </div>
      )}
      {data?.length < 1 && (
        <div className="flex justify-center mt-36">
          <p className="font-medium text-xl text-app-green text-center mb-6 block">
            No Maintenance History Found for this vehicle
          </p>
        </div>
      )}
    </>
  );
};

export default MaintenanceTable;
