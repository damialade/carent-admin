//@ts-nocheck
import React, { useMemo, useState } from "react";
import { VehicleDetails } from "@/utils/types";
import { createColumnHelper } from "@tanstack/react-table";
import { PaginatedTable } from "@/components/molecules/PaginatedTable";
import PaymentModal from "@/components/molecules/PaymentModal";
import Add from "@/components/icons/Add";

const columnHelper = createColumnHelper<VehicleDetails>();

const PaymentTable = () => {
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
      columnHelper.accessor("paymentDesc", {
        header: () => " Payment Description",
        cell: (info) => <p className="capitalize"> {info.getValue()}</p>,
      }),
      columnHelper.accessor("createdBy", {
        header: () => " Created By",
        cell: (info) => <p> {info.getValue()}</p>,
      }),
    ],
    []
  );

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className=" flex justify-between py-3 px-6">
        <p className="text-app-white text-3xl font-extrabold">Payments</p>
        <div className="flex items-center cursor-pointer space-x-4 text-app-white bg-btn-green py-1 px-3 rounded-md">
          <Add fill="#fff" />
          <div
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add Payment
          </div>
        </div>
      </div>
      {/*Modal Starts Here */}
      {showModal && (
        <PaymentModal
          show={showModal}
          onClick={() => {
            setShowModal(false);
          }}
        />
      )}
      {/*Modal Ends Here */}
      <div className="flex space-x-3 items-center text-red-600 font-medium py-3 px-6">
        <p>Total Due:</p>
        <p>₦40,000</p>
      </div>
      {data?.length > 0 && (
        <div className="relative mb-4">
          <PaginatedTable tableData={data} columns={columns} />
        </div>
      )}
      {data?.length < 1 && (
        <div className="flex justify-center mt-36">
          <p className="font-medium text-xl text-app-green text-center mb-6 block">
            No Payment Found for this Reservation
          </p>
        </div>
      )}
    </>
  );
};

export default PaymentTable;
