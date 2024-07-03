//@ts-nocheck
"use client";
import React, { Fragment, useState, useMemo } from "react";
import SearchInput from "@/components/atoms/SearchInput";
import ReservationTable from "./ReservationTable";

const ReservationView = () => {
  let reservationData = require("../dashboard/vehicles/vehicleReservation.json");
  const [searchValue, setSearchValue] = useState("");

  const memoizedReservationData = useMemo(() => {
    if (searchValue) {
      return reservationData?.filter((singleData: any) => {
        return singleData?.name
          ?.toLowerCase()
          ?.includes(searchValue?.toLowerCase());
      });
    } else {
      return reservationData;
    }
  });

  return (
    <Fragment>
      <div>
        <div className="px-6 py-3">
          <p className="text-app-white text-3xl font-extrabold">Reservations</p>
        </div>

        <div className="flex items-center px-6 py-3">
          <SearchInput
            placeholder="Search Customer Name."
            setSearchValue={setSearchValue}
          />
        </div>
        <div>
          <ReservationTable data={memoizedReservationData} />
          {memoizedReservationData?.length < 1 && (
            <div className="flex justify-center mt-36">
              <p className="font-medium text-xl text-app-green text-center mb-6 block">
                No Reservation Found for this vehicle
              </p>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ReservationView;
