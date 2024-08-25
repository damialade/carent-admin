//@ts-nocheck
"use client";
import React, { Fragment, useState } from "react";
import WithSideBar from "@/components/Layout/WithSideBar";
import Back from "@/components/icons/Back";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CSummary from "@/modules/CSummary";
import Print from "@/components/icons/Print";
import Message from "@/components/icons/Message";
import DocumentsTable from "@/modules/DocumentsTable";
import Notes from "@/modules/Notes";
import Dot from "@/components/icons/Dot";
import Add from "@/components/icons/Add";
import DSummary from "@/modules/DSummary";

const CustomerDetailsPage = () => {
  const router = useRouter();

  const [selectedOne, setSelectedOne] = useState("summary");
  const [summary, setSummary] = useState(true);
  const [note, setNote] = useState(false);
  const [document, setDocument] = useState(false);
  const [dSummary, setDSummary] = useState(false);

  const summaryView = () => {
    setSummary(true);
    setNote(false);
    setDocument(false);
    setDSummary(false);
    setSelectedOne("summary");
  };

  const noteView = () => {
    setSummary(false);
    setNote(true);
    setDocument(false);
    setDSummary(false);
    setSelectedOne("note");
  };
  const documentView = () => {
    setSummary(false);
    setNote(false);
    setDocument(true);
    setDSummary(false);
    setSelectedOne("doc");
  };
  const DSView = () => {
    setSummary(false);
    setNote(false);
    setDocument(false);
    setDSummary(true);
    setSelectedOne("dSummary");
  };

  return (
    <Fragment>
      <WithSideBar>
        <div>
          <div className="px-3">
            <Link
              href="/dashboard/customers"
              className="flex items-center space-x-2 text-app-white hover:text-btn-green"
            >
              <Back />
              <p>Customers</p>
            </Link>
            <p className="text-app-white text-3xl font-extrabold">
              Customer Details
            </p>
          </div>
          <div className="flex justify-between px-3">
            <div className="my-3 flex space-x-5">
              <div>
                <Image
                  src="/images/Avatar.png"
                  width={117}
                  height={96}
                  alt="car View 1"
                  priority
                />
              </div>
              <div className="space-y-2">
                <p className="text-app-white text-xl font-extrabold">
                  Michelle Nkumah
                </p>
                <p className="text-light-green text-sm font-normal">
                  <span className="mr-4">Phone</span>070-43778-634
                </p>
                <div className="flex items-center spce-x-3">
                  <Dot />
                  <p>Active</p>
                </div>
              </div>
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
                onClick={DSView}
                className={`text-app-white cursor-pointer ${
                  selectedOne === "dSummary" && "text-btn-green"
                }`}
              >
                Deposit Summary
              </li>
            </ul>
            <hr />
          </div>
          {summary && <CSummary />}
          {note && <Notes />}
          {document && <DocumentsTable />}
          {dSummary && <DSummary />}
        </div>
      </WithSideBar>
    </Fragment>
  );
};

export default CustomerDetailsPage;
