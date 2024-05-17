import React, { useState, Fragment } from "react";
import { Menu, MenuButton, Transition, MenuItems } from "@headlessui/react";
import UpdatePassword from "@/components/molecules/UpdatePassword";

const AppHeader = ({
  navOpen,
  setNavOpen,
}: {
  navOpen: boolean;
  setNavOpen: any;
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="flex w-screen min-h-[90px]">
      <div
        className={`flex fixed top-0 left-0 bg-dark-grey w-full border-b-[1px] z-[500] ${
          navOpen ? "translate-x-[250px]" : "translate-x-[75px]"
        } `}
      >
        <div
          className={`relative flex justify-between items-start w-full p-4 ${
            navOpen ? "mr-[250px]" : "mr-[80px]"
          }`}
        >
          <div className="flex items-center justify-between ">
            <button
              type="button"
              onClick={() => setNavOpen((s: boolean) => !s)}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15L17.5 15"
                  stroke="#1BB652"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 7.5L25 7.5"
                  stroke="#1BB652"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 22.5L10 22.5"
                  stroke="#1BB652"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium bg-transparent text-app-white rounded-md ">
                  <div className="flex items-center space-x-4 ">
                    <div className="text-right">
                      <p className="text-base">Gbolaga Tula</p>
                      <p className="capitalize text-sm">Admin</p>
                    </div>
                    <div className="rounded-full border bg-btn-green w-12 h-12 text-center py-2 text-xl font-semibold ">
                      GT
                    </div>
                  </div>
                </MenuButton>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 w-72 mt-4 origin-top-right bg-app-dark text-app-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <i className="flex items-center justify-center py-2 text-base font-medium">
                    Gbolaga Tula
                  </i>
                  <i className="flex items-center justify-center py-2 text-sm">
                    Contact: 077804567023
                  </i>
                  <i className="flex items-center justify-center py-2 text-sm">
                    Email: gbollytula@gmail.com
                  </i>
                  <div className="px-1 py-2 ">
                    <button
                      onClick={() => setShowModal(true)}
                      className="bg-btn-green w-full flex items-center justify-center p-2 rounded-2xl text-lg font-bold"
                    >
                      Update Password
                    </button>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
          {/*Modal Starts Here */}
          {showModal && (
            <UpdatePassword
              show2={showModal}
              onClick={() => {
                setShowModal(false);
              }}
            />
          )}
          {/* Modal Ends Here */}
        </div>
      </div>
    </header>
  );
};

export { AppHeader };
