//@ts-nocheck
"use client";
import React, { Fragment } from "react";
import {
  Transition,
  Dialog,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Button } from "../atoms/Button";
import { Close } from "../icons/Close";

const ReservationStatusModal = ({ onClose = () => {}, show, onClick }) => {
  return (
    <>
      <Transition show={!!show} appear as={Fragment}>
        <Dialog as="div" className="relative z-[10000]" onClose={onClose}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-400 bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-app-darkGray shadow-xl rounded-2xl">
                  <div className="flex items-center justify-between">
                    <DialogTitle
                      as="h3"
                      className="text-app-white text-lg font-extrabold"
                    >
                      Confirm Reservation Status
                    </DialogTitle>
                    <button
                      type="button"
                      className="text-gray-400  hover:bg-btn-green hover:text-gray-900 rounded-lg text-sm p-1 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={onClick}
                    >
                      <Close />
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <form>
                    <div className=" px-8 my-4">
                      <select className="w-full h-fit px-3 py-2 leading-tight text-app-white placeholder-white rounded shadow-lg bg-app-grey  focus:outline-none focus:shadow-outline">
                        <option
                          value=""
                          className="bg-app-yellow text-app-black"
                        >
                          Select Reservation Status
                        </option>
                        <option
                          value="pending"
                          className="bg-app-yellow text-app-black"
                        >
                          Pending
                        </option>
                        <option
                          value="in-progress"
                          className="bg-app-yellow text-app-black"
                        >
                          In-Progress
                        </option>
                        <option
                          value="completed"
                          className="bg-app-yellow text-app-black"
                        >
                          Completed
                        </option>
                      </select>
                    </div>

                    <div className="flex justify-center my-5">
                      <Button
                        type="submit"
                        className="text-app-white w-[50%] !p-2 flex items-center justify-center space-x-6 text-lg"
                      >
                        <span>Update</span>
                      </Button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ReservationStatusModal;
