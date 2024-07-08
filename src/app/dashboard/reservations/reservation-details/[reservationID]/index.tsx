//@ts-nocheck
"use client";
import React, { Fragment, useState } from "react";
import WithSideBar from "@/components/Layout/WithSideBar";
import Back from "@/components/icons/Back";
import Link from "next/link";
import Image from "next/image";
import RSummary from "@/modules/RSummary";
import Print from "@/components/icons/Print";
import Message from "@/components/icons/Message";
import RDocumentTable from "@/modules/RDocumentTable";
import Notes from "@/modules/Notes";
import EmailLog from "@/modules/EmailLog";
import PaymentTable from "@/modules/PaymentTable";
import ReservationStatusModal from "@/components/molecules/ReservationStatusModal";

const ReservationDetailsPage = () => {
  const [selectedOne, setSelectedOne] = useState("summary");
  const [summary, setSummary] = useState(true);
  const [payment, setPayment] = useState(false);
  const [note, setNote] = useState(false);
  const [document, setDocument] = useState(false);
  const [emailLog, setEmailLog] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const summaryView = () => {
    setSummary(true);
    setPayment(false);
    setNote(false);
    setDocument(false);
    setEmailLog(false);
    setSelectedOne("summary");
  };

  const paymentView = () => {
    setSummary(false);
    setPayment(true);
    setNote(false);
    setDocument(false);
    setEmailLog(false);
    setSelectedOne("payment");
  };
  const noteView = () => {
    setSummary(false);
    setPayment(false);
    setNote(true);
    setDocument(false);
    setEmailLog(false);
    setSelectedOne("note");
  };
  const documentView = () => {
    setSummary(false);
    setPayment(false);
    setNote(false);
    setDocument(true);
    setEmailLog(false);
    setSelectedOne("doc");
  };
  const emailLogView = () => {
    setSummary(false);
    setPayment(false);
    setNote(false);
    setDocument(false);
    setEmailLog(true);
    setSelectedOne("email");
  };

  return (
    <Fragment>
      <WithSideBar>
        <div>
          <div className="px-3">
            <Link
              href="/dashboard/reservations"
              className="flex items-center space-x-2 text-app-white hover:text-btn-green"
            >
              <Back />
              <p>Reservations</p>
            </Link>
            <p className="text-app-white text-3xl font-extrabold">
              Reservation Details
            </p>
          </div>
          <div className="flex justify-between px-3">
            <div className="my-3 flex space-x-5">
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
            {summary && (
              <div className="flex space-x-3 items-center">
                <div
                  onClick={() => {
                    setShowModal(true);
                  }}
                  className="bg-light-green flex items-center cursor-pointer space-x-6 text-btn-green border border-dotted rounded-xl py-2 px-10"
                >
                  <p>Change Status</p>
                </div>
                <div className="bg-light-green flex items-center cursor-pointer space-x-6 text-app-dark border border-dotted rounded-xl py-2 px-4">
                  <Print />
                  <p>Print</p>
                </div>
                <div className="bg-light-green flex items-center cursor-pointer space-x-6 text-app-dark border border-dotted rounded-xl py-2 px-4">
                  <Message />
                  <p>Email</p>
                </div>
              </div>
            )}
          </div>
          {/*Modal Starts Here */}
          {showModal && (
            <ReservationStatusModal
              show={showModal}
              onClick={() => {
                setShowModal(false);
              }}
            />
          )}
          {/*Modal Ends Here */}
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
                onClick={paymentView}
                className={`text-app-white cursor-pointer ${
                  selectedOne === "payment" && "text-btn-green"
                }`}
              >
                Payments
              </li>

              <li
                onClick={noteView}
                className={`text-app-white cursor-pointer ${
                  selectedOne === "note" && "text-btn-green"
                }`}
              >
                Notes
              </li>
              <li
                onClick={documentView}
                className={`text-app-white cursor-pointer ${
                  selectedOne === "doc" && "text-btn-green"
                }`}
              >
                Documents
              </li>
              <li
                onClick={emailLogView}
                className={`text-app-white cursor-pointer ${
                  selectedOne === "email" && "text-btn-green"
                }`}
              >
                Email Log
              </li>
            </ul>
            <hr />
          </div>
          {summary && <RSummary />}
          {payment && <PaymentTable />}
          {note && <Notes />}
          {document && <RDocumentTable />}
          {emailLog && <EmailLog />}
        </div>
      </WithSideBar>
    </Fragment>
  );
};

export default ReservationDetailsPage;
