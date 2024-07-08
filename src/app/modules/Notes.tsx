import Planner from "@/components/icons/Planner";
import NotesModal from "@/components/molecules/NotesModal";
import React, { useState } from "react";

const Notes = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="px-5 py-6">
      <div className="bg-app-white my-2 rounded-sm">
        <div className=" flex justify-between py-3 px-6">
          <p className="text-app-dark text-xl font-extrabold">Notes Draft</p>
          <button
            className="py-1 px-2 rounded-md bg-light-green text-btn-green"
            onClick={() => {
              setShowModal(true);
            }}
          >
            New Note
          </button>
        </div>
        {/*Modal Starts Here */}
        {showModal && (
          <NotesModal
            show={showModal}
            onClick={() => {
              setShowModal(false);
            }}
          />
        )}
        {/*Modal Ends Here */}

        <hr className="h-0.5 my-2 bg-gray-200 border-0 max-w-full" />
        <div className="divide-y divide-slate-200 space-y-4 my-4">
          <div className="flex justify-between px-6 py-4">
            <p className="font-medium">Note</p>
            <p className="font-medium">Created On</p>
            <p className="font-medium">Created By</p>
          </div>
          <div className="flex justify-between px-6 py-4">
            <p className="text-app-grey font-light">
              The vehicle does not have a child seat{" "}
            </p>
            <p className="text-app-grey font-light w-64">04/04/2024 16:19</p>
            <p className="text-app-grey font-light">Olufeyi Akinsiku</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
