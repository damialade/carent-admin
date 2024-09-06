//@ts-nocheck
import React, { useMemo, useState } from "react";
import { VehicleDetails } from "@/utils/types";
import { createColumnHelper } from "@tanstack/react-table";
import { PaginatedTable } from "@/components/molecules/PaginatedTable";
import ExpensesModal from "@/components/molecules/ExpensesModal";
import Add from "@/components/icons/Add";
import SearchInput from "@/components/atoms/SearchInput";

const columnHelper = createColumnHelper<VehicleDetails>();

const ExpensesTable = () => {
  let data = require("../dashboard/vehicles/vehicleDetails.json");
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  const memoizedData = useMemo(() => {
    if (searchValue) {
      return data?.filter((singleData: any) => {
        return singleData?.expenseType
          ?.toLowerCase()
          ?.includes(searchValue?.toLowerCase());
      });
    } else {
      return data;
    }
  });

  const columns = useMemo(() => [
    columnHelper.accessor("expenseType", {
      header: () => "Expense Type",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("expenseAmount", {
      header: () => "Expense Amount",
      cell: (info) => <p> ₦{info.getValue()}</p>,
    }),

    columnHelper.accessor("payee", {
      header: () => "Payee",
      cell: (info) => <p> {info.getValue()}</p>,
    }),
    columnHelper.accessor("expenseDate", {
      header: () => "Expense Date",
      cell: (info) => <p> {info.getValue()}</p>,
    }),
    columnHelper.accessor("mileage", {
      header: () => "Mileage",
      cell: (info) => <p> {info.getValue()}</p>,
    }),
    columnHelper.accessor("note", {
      header: () => "Note",
      cell: (info) => <p> {info.getValue()}</p>,
    }),
  ]);

  return (
    <>
      <div className="py-3 px-6">
        <p className="text-app-white text-3xl font-extrabold">Expenses</p>
      </div>
      <div className=" flex justify-between py-3 px-6">
        <div className="flex items-center space-x-3">
          <p className="text-light-green">Start Date:</p>
          <div className={`flex items-center -space-x-6`}>
            <input
              value=""
              type="date"
              className="w-full px-8 py-2 leading-tight text-app-white placeholder-white rounded-md shadow-lg bg-light-green border-[1px] appearance-none focus:outline-none focus:shadow-outline"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className="flex items-center space-x-3">
            <p className="text-light-green">End Date:</p>
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
          <div className="flex items-center px-6 py-3">
            <SearchInput
              placeholder="Search Expense Type."
              setSearchValue={setSearchValue}
            />
          </div>
          <div className="flex items-center cursor-pointer space-x-4 text-app-white bg-btn-green py-1 px-3 rounded-md">
            <Add fill="#fff" />
            <div
              onClick={() => {
                setShowModal(true);
              }}
            >
              Create Expense
            </div>
          </div>
        </div>
      </div>
      {/*Modal Starts Here */}
      {showModal && (
        <ExpensesModal
          show={showModal}
          onClick={() => {
            setShowModal(false);
          }}
        />
      )}
      {/*Modal Ends Here */}
      {memoizedData?.length > 0 && (
        <div className="relative mb-4">
          <PaginatedTable tableData={memoizedData} columns={columns} />
        </div>
      )}
      {memoizedData?.length < 1 && (
        <div className="flex justify-center mt-36">
          <p className="font-medium text-xl text-app-green text-center mb-6 block">
            No Expenses Found for this vehicle
          </p>
        </div>
      )}
    </>
  );
};

export default ExpensesTable;
