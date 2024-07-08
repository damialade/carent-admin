//@ts-nocheck
import React, { useMemo, useState } from "react";
import { VehicleDetails } from "@/utils/types";
import { createColumnHelper } from "@tanstack/react-table";
import { PaginatedTable } from "@/components/molecules/PaginatedTable";
import Add from "@/components/icons/Add";
import TodoModal from "@/components/molecules/TodoModal";
import { StatusPill } from "@/components/UI/StatusPill";

const columnHelper = createColumnHelper<VehicleDetails>();

const ToDoTable = () => {
  let data = require("../dashboard/vehicles/vehicleDetails.json");

  const columns = useMemo(
    () => [
      columnHelper.accessor("todoName", {
        header: () => "Name",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("todoDate", {
        header: () => "Date",
        cell: (info) => info.getValue(),
      }),

      columnHelper.accessor("vehicleNo", {
        header: () => "Vehicle No.",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("priority", {
        header: () => "Priority",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("assignedto", {
        header: () => "Assigned To",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("todoNote", {
        header: () => "Note",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
      columnHelper.accessor("status", {
        header: () => "Status",
        cell: (info) => <StatusPill value={info.getValue()} />,
      }),
    ],
    []
  );

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className=" flex justify-between py-3 px-6">
        <p className="text-app-white text-3xl font-extrabold">To Do</p>
        <div className="flex items-center cursor-pointer space-x-4 text-app-white bg-btn-green py-1 px-3 rounded-md">
          <Add fill="#fff" />
          <div
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add Todo
          </div>
        </div>
      </div>
      {/*Modal Starts Here */}
      {showModal && (
        <TodoModal
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
            No Todos found for this vehicle
          </p>
        </div>
      )}
    </>
  );
};

export default ToDoTable;
