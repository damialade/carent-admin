//@ts-nocheck
import React from "react";
import ReservationIcon from "@/components/icons/ReservationIcon";
import Returns from "@/components/icons/Returns";
import Overdues from "@/components/icons/Overdues";
import PPayments from "@/components/icons/PPayments";

const DbCards = () => {
  return (
    <div className="flex items-center my-6 mx-4 space-x-6">
      <div className=" bg-bg-hover text-dark-grey flex items-center space-x-6 rounded-md px-6 py-3">
        <ReservationIcon />
        <div>
          <p className="font-medium text-lg">Reservations</p>
          <p className="font-bold text-2xl">12</p>
        </div>
      </div>
      <div className="w-[20%] bg-bg-hover text-dark-grey flex items-center space-x-6 rounded-md px-8 py-3">
        <Returns />
        <div>
          <p className="font-medium text-lg">Returns</p>
          <p className="font-bold text-2xl">24</p>
        </div>
      </div>
      <div className="w-[20%] bg-bg-hover text-dark-grey flex items-center space-x-6 rounded-md px-8 py-3">
        <Overdues />
        <div>
          <p className="font-medium text-lg">Overdues</p>
          <p className="font-bold text-2xl">8</p>
        </div>
      </div>
      <div className="w-[25%] bg-bg-hover text-dark-grey flex items-center space-x-6 rounded-md px-6 py-3">
        <PPayments />
        <div>
          <p className="font-medium text-lg">Pending Payments</p>
          <p className="font-bold text-2xl">10</p>
        </div>
      </div>
    </div>
  );
};

export default DbCards;
