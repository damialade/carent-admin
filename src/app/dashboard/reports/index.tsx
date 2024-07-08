"use client";
import WithSideBar from "@/components/Layout/WithSideBar";
import CustomerReport from "@/modules/CustomerReport";
import ManagementReport from "@/modules/ManagementReport";
import RentalsReport from "@/modules/RentalsReport";
import VehicleReport from "@/modules/VehicleReport";
import React, { Fragment, useState } from "react";

const Reports = () => {
  const [selected, setSelected] = useState("customers");
  const [customers, setCustomers] = useState(true);
  const [reservations, setReservations] = useState(false);
  const [vehicle, setVehicle] = useState(false);
  const [management, setManagement] = useState(false);

  const customerView = () => {
    setCustomers(true);
    setReservations(false);
    setVehicle(false);
    setManagement(false);
    setSelected("customers");
  };

  const reservationView = () => {
    setCustomers(false);
    setReservations(true);
    setVehicle(false);
    setManagement(false);
    setSelected("reservations");
  };
  const vehicleView = () => {
    setCustomers(false);
    setReservations(false);
    setVehicle(true);
    setManagement(false);
    setSelected("vehicles");
  };
  const managementView = () => {
    setCustomers(false);
    setReservations(false);
    setVehicle(false);
    setManagement(true);
    setSelected("management");
  };

  return (
    <Fragment>
      <WithSideBar>
        <div>
          {" "}
          <div className="px-3">
            <p className="text-app-white text-3xl font-extrabold">
              All Reports
            </p>
          </div>
          <hr className="my-3" />
          <div>
            <ul className="flex p-3 space-x-5 font-medium">
              <li
                onClick={customerView}
                className={`text-app-white cursor-pointer ${
                  selected === "customers" && "text-btn-green"
                }`}
              >
                Customers
              </li>
              <li
                onClick={reservationView}
                className={`text-app-white cursor-pointer ${
                  selected === "reservations" && "text-btn-green"
                }`}
              >
                Rentals & Reservations
              </li>
              <li
                onClick={vehicleView}
                className={`text-app-white cursor-pointer ${
                  selected === "vehicles" && "text-btn-green"
                }`}
              >
                Vehicle
              </li>
              <li
                onClick={managementView}
                className={`text-app-white cursor-pointer ${
                  selected === "management" && "text-btn-green"
                }`}
              >
                Management Reports
              </li>
            </ul>
            <hr />
          </div>
          {customers && <CustomerReport />}
          {reservations && <RentalsReport />}
          {vehicle && <VehicleReport />}
          {management && <ManagementReport />}
        </div>
      </WithSideBar>
    </Fragment>
  );
};

export default Reports;
