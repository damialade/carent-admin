//@ts-nocheck
"use client";
import React, { Fragment, useState } from "react";
import WithSideBar from "@/components/Layout/WithSideBar";
import Back from "@/components/icons/Back";
import Link from "next/link";
import Image from "next/image";
import Summary from "@/modules/Summary";
import General from "@/modules/General";
import Ownership from "@/modules/Ownership";
import Insurance from "@/modules/Insurance";
import Options from "@/modules/Options";
import OtherInfo from "@/modules/OtherInfo";
import Notes from "@/modules/Notes";
import ReservationView from "@/modules/ReservationView";
import DamagesTable from "@/modules/DamagesTable";
import DocumentsTable from "@/modules/DocumentsTable";
import ExpensesTable from "@/modules/ExpensesTable";
import MaintenanceTable from "@/modules/Maintenance";
import AgreementTrackTable from "@/modules/AgreementTrackTable";
import ToDoTable from "@/modules/ToDoTable";

const VehicleDetailsPage = () => {
  const [selectedOne, setSelectedOne] = useState("summary");
  const [summary, setSummary] = useState(true);
  const [reservations, setReservations] = useState(false);
  const [damages, setDamages] = useState(false);
  const [maintenance, setMaintenance] = useState(false);
  const [expenses, setExpenses] = useState(false);
  const [todo, setTodo] = useState(false);
  const [document, setDocument] = useState(false);
  const [agreement, setAgreement] = useState(false);

  const summaryView = () => {
    setSummary(true);
    setReservations(false);
    setDamages(false);
    setMaintenance(false);
    setExpenses(false);
    setTodo(false);
    setDocument(false);
    setAgreement(false);
    setSelectedOne("summary");
  };
  const reservationView = () => {
    setSummary(false);
    setReservations(true);
    setDamages(false);
    setMaintenance(false);
    setExpenses(false);
    setTodo(false);
    setDocument(false);
    setAgreement(false);
    setSelectedOne("reservations");
  };

  const damageView = () => {
    setSummary(false);
    setReservations(false);
    setDamages(true);
    setMaintenance(false);
    setExpenses(false);
    setTodo(false);
    setDocument(false);
    setAgreement(false);
    setSelectedOne("damages");
  };

  const maintenanceView = () => {
    setSummary(false);
    setReservations(false);
    setDamages(false);
    setMaintenance(true);
    setExpenses(false);
    setTodo(false);
    setDocument(false);
    setAgreement(false);
    setSelectedOne("maintenance");
  };

  const expensesView = () => {
    setSummary(false);
    setReservations(false);
    setDamages(false);
    setMaintenance(false);
    setExpenses(true);
    setTodo(false);
    setDocument(false);
    setAgreement(false);
    setSelectedOne("expenses");
  };
  const todoView = () => {
    setSummary(false);
    setReservations(false);
    setDamages(false);
    setMaintenance(false);
    setExpenses(false);
    setTodo(true);
    setDocument(false);
    setAgreement(false);
    setSelectedOne("todo");
  };
  const documentView = () => {
    setSummary(false);
    setReservations(false);
    setDamages(false);
    setMaintenance(false);
    setExpenses(false);
    setTodo(false);
    setDocument(true);
    setAgreement(false);
    setSelectedOne("document");
  };
  const agreementView = () => {
    setSummary(false);
    setReservations(false);
    setDamages(false);
    setMaintenance(false);
    setExpenses(false);
    setTodo(false);
    setDocument(false);
    setAgreement(true);
    setSelectedOne("agreement");
  };

  const [selectedTwo, setSelectedTwo] = useState("general");
  const [general, setGeneral] = useState(true);
  const [ownership, setOwnership] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [options, setOptions] = useState(false);
  const [otherInfo, setOtherInfo] = useState(false);
  const [notes, setNotes] = useState(false);

  const generalView = () => {
    setGeneral(true);
    setOwnership(false);
    setInsurance(false);
    setOptions(false);
    setOtherInfo(false);
    setNotes(false);
    setSelectedTwo("general");
  };
  const ownershipView = () => {
    setGeneral(false);
    setOwnership(true);
    setInsurance(false);
    setOptions(false);
    setOtherInfo(false);
    setNotes(false);
    setSelectedTwo("ownership");
  };
  const insuranceView = () => {
    setGeneral(false);
    setOwnership(false);
    setInsurance(true);
    setOptions(false);
    setOtherInfo(false);
    setNotes(false);
    setSelectedTwo("insurance");
  };
  const optionsView = () => {
    setGeneral(false);
    setOwnership(false);
    setInsurance(false);
    setOptions(true);
    setOtherInfo(false);
    setNotes(false);
    setSelectedTwo("options");
  };
  const infoView = () => {
    setGeneral(false);
    setOwnership(false);
    setInsurance(false);
    setOptions(false);
    setOtherInfo(true);
    setNotes(false);
    setSelectedTwo("info");
  };

  const noteView = () => {
    setGeneral(false);
    setOwnership(false);
    setInsurance(false);
    setOptions(false);
    setOtherInfo(false);
    setNotes(true);
    setSelectedTwo("note");
  };

  return (
    <Fragment>
      <WithSideBar>
        <div>
          <div className="px-3">
            <Link
              href="/dashboard/vehicles"
              className="flex items-center space-x-2 text-app-white hover:text-btn-green"
            >
              <Back />
              <p>Vehicles</p>
            </Link>
            <p className="text-app-white text-3xl font-extrabold">
              Vehicle Details
            </p>
          </div>
          <div className="px-3 my-3 flex space-x-5">
            <div>
              <Image
                src="/images/CarView1.png"
                width={117}
                height={96}
                alt="car View 1"
                priority
              />
            </div>
            <div className="space-y-2">
              <p className="text-app-white text-xl font-extrabold">
                Nissan GT-R
              </p>
              <p className="text-light-green text-sm font-normal">
                <span className="mr-4">SUV</span>2002 Nissan PathFinder
              </p>
              <p className="text-app-textGray text-sm font-light ">
                68,808 miles
              </p>
            </div>
          </div>
          <div>
            <ul className="flex px-6 py-3 space-x-5 font-medium">
              <li
                onClick={summaryView}
                className={`text-app-white cursor-pointer ${
                  selectedOne === "summary" && "text-btn-green"
                }`}
              >
                Summary
              </li>
              <li
                onClick={reservationView}
                className={`text-app-white cursor-pointer ${
                  selectedOne === "reservations" && "text-btn-green"
                }`}
              >
                Reservations
              </li>
              <li
                onClick={damageView}
                className={`text-app-white cursor-pointer ${
                  selectedOne === "damages" && "text-btn-green"
                }`}
              >
                Damages
              </li>
              <li
                onClick={maintenanceView}
                className={`text-app-white cursor-pointer ${
                  selectedOne === "maintenance" && "text-btn-green"
                }`}
              >
                Maintenance
              </li>
              <li
                onClick={expensesView}
                className={`text-app-white cursor-pointer ${
                  selectedOne === "expenses" && "text-btn-green"
                }`}
              >
                Expenses
              </li>
              <li
                onClick={todoView}
                className={`text-app-white cursor-pointer ${
                  selectedOne === "todo" && "text-btn-green"
                }`}
              >
                Todo List
              </li>
              <li
                onClick={documentView}
                className={`text-app-white cursor-pointer ${
                  selectedOne === "document" && "text-btn-green"
                }`}
              >
                Documents
              </li>
              <li
                onClick={agreementView}
                className={`text-app-white cursor-pointer ${
                  selectedOne === "agreement" && "text-btn-green"
                }`}
              >
                Agreement Track
              </li>
            </ul>
            <hr />
          </div>
          {summary && <Summary />}
          {reservations && <ReservationView />}
          {damages && <DamagesTable />}
          {maintenance && <MaintenanceTable />}
          {expenses && <ExpensesTable />}
          {todo && <ToDoTable />}
          {document && <DocumentsTable />}
          {agreement && <AgreementTrackTable />}
          <div>
            <ul className="flex px-6 py-3 space-x-5 text-app-white font-medium mt-12">
              <li
                onClick={generalView}
                className={`text-app-white cursor-pointer ${
                  selectedTwo === "general" && "text-btn-green"
                }`}
              >
                General
              </li>
              <li
                onClick={ownershipView}
                className={`text-app-white cursor-pointer ${
                  selectedTwo === "ownership" && "text-btn-green"
                }`}
              >
                Ownership
              </li>
              <li
                onClick={insuranceView}
                className={`text-app-white cursor-pointer ${
                  selectedTwo === "insurance" && "text-btn-green"
                }`}
              >
                License & Insurance
              </li>
              <li
                onClick={optionsView}
                className={`text-app-white cursor-pointer ${
                  selectedTwo === "options" && "text-btn-green"
                }`}
              >
                Vehicle Options
              </li>
              <li
                onClick={infoView}
                className={`text-app-white cursor-pointer ${
                  selectedTwo === "info" && "text-btn-green"
                }`}
              >
                Other Information
              </li>
              <li
                onClick={noteView}
                className={`text-app-white cursor-pointer ${
                  selectedTwo === "note" && "text-btn-green"
                }`}
              >
                Notes
              </li>
            </ul>
            <hr />
          </div>
          {general && <General />}
          {ownership && <Ownership />}
          {insurance && <Insurance />}
          {options && <Options />}
          {otherInfo && <OtherInfo />}
          {notes && <Notes />}
        </div>
      </WithSideBar>
    </Fragment>
  );
};

export default VehicleDetailsPage;
