//@ts-nocheck
"use client";
import WithSideBar from "@/components/Layout/WithSideBar";
import React, { Fragment, useState, useMemo } from "react";
import SearchInput from "@/components/atoms/SearchInput";
import { useRouter } from "next/navigation";
import Add from "@/components/icons/Add";
import reservationData from "./reservation.json";
import MainReservationTable from "@/modules/MainReservationTable";

const Reservations = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const memoizedVehicleData = useMemo(() => {
    if (searchValue) {
      return reservationData?.filter((singleData: any) => {
        return singleData?.customer
          ?.toLowerCase()
          ?.includes(searchValue?.toLowerCase());
      });
    } else {
      return reservationData;
    }
  }, []);

  return (
    <Fragment>
      <WithSideBar>
        <div>
          <div className="flex justify-between">
            <div className="px-3">
              <p className="text-app-white text-3xl font-extrabold">
                All Reservations
              </p>
            </div>
            <div
              onClick={() => {
                router.push("/dashboard/reservations/add-reservation");
              }}
              className="bg-dark-grey flex items-center cursor-pointer space-x-6 text-app-white border border-dotted rounded-xl py-2 px-10"
            >
              <Add fill="#fff" />
              <p>Create Reservation</p>
            </div>
          </div>

          <div className="flex items-center px-5 py-3">
            <SearchInput
              placeholder="Search Customer Name"
              setSearchValue={setSearchValue}
            />
          </div>
          <div>
            <MainReservationTable data={memoizedVehicleData} />
            {memoizedVehicleData?.length < 1 && (
              <div className="flex justify-center mt-36">
                <p className="font-medium text-xl text-app-green text-center mb-6 block">
                  No Reservation Found
                </p>
              </div>
            )}
          </div>
        </div>
      </WithSideBar>
    </Fragment>
  );
};

export default Reservations;
