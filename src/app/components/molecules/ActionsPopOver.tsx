import React, { Fragment } from "react";
import {
  Transition,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import Action from "../icons/Actions";

const ActionsPopOver = ({ editFunc, delFunc }: any) => {
  return (
    <div className="w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <PopoverButton
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <Action
                className={`${open ? "" : "text-opacity-70"}
                   h-4 w-4 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </PopoverButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute left-0 z-10 w-50 -translate-x-1/2 transform px-4 ">
                <div className="overflow-hidden rounded-lg shadow-lg ">
                  <div className="relative text-left text-[#78828f] bg-[#e8f8ee]">
                    {editFunc && (
                      <div className="py-2 px-4 border-b-[1px] border-dark-grey">
                        <div onClick={editFunc} className="">
                          Edit
                        </div>
                      </div>
                    )}
                    {delFunc && (
                      <div onClick={delFunc} className="py-2 px-4">
                        Delete
                      </div>
                    )}
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export { ActionsPopOver };
