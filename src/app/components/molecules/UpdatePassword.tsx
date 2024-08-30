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
import classNames from "classnames";

const UpdatePassword = ({ onClose = () => {}, show2, onClick }) => {
  return (
    <>
      <Transition show={!!show2} appear as={Fragment}>
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
                      className="text-app-white text-2xl font-extrabold"
                    >
                      Update Password
                    </DialogTitle>
                    <button
                      type="button"
                      className="text-gray-400  hover:bg-btn-green hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={onClick}
                    >
                      <Close />
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <form>
                    <div className="my-5 py-4 px-8">
                      <input
                        type="password"
                        className="w-full px-3 py-2 leading-tight text-white placeholder-white rounded shadow-lg bg-app-grey focus:outline-none focus:shadow-outline"
                        placeholder="Old Password"
                      />
                      <error className="text-red-600 italic">
                        old password is incorrect
                      </error>
                    </div>

                    <div className=" px-8">
                      <input
                        type="password"
                        className="w-full px-3 py-2 leading-tight text-white placeholder-white rounded shadow-lg bg-app-grey focus:outline-none focus:shadow-outline"
                        placeholder="New Password"
                      />
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

export default UpdatePassword;
