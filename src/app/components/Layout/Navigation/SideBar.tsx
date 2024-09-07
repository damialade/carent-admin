//@ts-nocheck
"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Home from "@/components/icons/Home";
import Logout from "@/components/icons/Logout";
import { AppLogo } from "@/components/atoms/AppLogo";
import Vehicle from "@/components/icons/Vehicle";
import Planner from "@/components/icons/Planner";
import Reservations from "@/components/icons/Reservations";
import Customers from "@/components/icons/Customers";
import Agreements from "@/components/icons/Agreements";
import Reports from "@/components/icons/Reports";
import classNames from "classnames";

const NavLink = (props: any) => {
  const { to, children, className } = props;
  return (
    <Link legacyBehavior href={to}>
      <span className={className}>{children}</span>
    </Link>
  );
};

const paths: {
  id?: any;
  text: string;
  icon: any;
  path: string;
  [key: string]: any;
}[] = [
  {
    id: 1,
    path: "/",
    text: "Dashboard",
    icon: Home,
  },
  {
    id: 2,
    path: "/vehicles",
    text: "Vehicles",
    icon: Vehicle,
  },
  // {
  //   id: 3,
  //   path: "/scheduler",
  //   text: "Scheduler",
  //   icon: Planner,
  // },
  {
    id: 4,
    path: "/reservations",
    text: "Reservations",
    icon: Reservations,
  },
  {
    id: 5,
    path: "/customers",
    text: "Customers",
    icon: Customers,
  },
  {
    id: 6,
    path: "/drivers",
    text: "Drivers",
    icon: Customers,
  },
  {
    id: 7,
    path: "/reports",
    text: "Reports",
    icon: Reports,
  },
];

const className =
  "mb-4 px-7 w-[300px] grid gap-x-5 items-center grid-cols-[35px_minmax(0,1fr)] text-left relative overflow-hidden ";

const textClass = "text-lg  text-app-grey";

const getActive = (path: any, index: number, loc: any, isButton: any) => {
  if (isButton) {
    return !!paths[index]?.subMenu.find((sub: any) =>
      loc?.usePathname.endsWith(sub.path)
    );
  }

  const url = path.path ? `${path.path}` : "";

  return loc?.usePathname.endsWith(`/dashboard${url}`);
};

interface NavItemProps {
  path: { id?: any; text: string; icon: any; path: string };
  isButton?: any;
  index?: number;
  children?: React.ReactNode;
  navOpen: boolean;
  loc: object;
}

const NavItem = ({
  path,
  isButton,
  index,
  children,
  navOpen,
  loc,
}: NavItemProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!navOpen) {
      setOpen(false);
    }
  }, [navOpen]);

  const Icon = path?.icon || Fragment;
  const isActive = getActive(path, isButton, index, loc);

  let fillProps = isActive ? { fill: "#1BB652" } : { fill: "#FFFFFF" };

  if (isButton) {
    return (
      <Fragment>
        <button
          disabled={!navOpen}
          className={`${className}`}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="object-contain text-center scale-75 min-h-40">
            <Icon {...fillProps} />
          </span>
          <p
            className={`${textClass} gap-x-2 grid grid-cols-[minmax(0,1fr)_32px] items-center`}
          >
            <span
              className={`${
                isActive ? "text-pure-white" : "text-app-textGray"
              }`}
            >
              {path.text}
            </span>
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                open ? "rotate-0" : "rotate-180"
              } transition-transform  `}
            >
              <path
                d="M1.5 6.75L7 1.25L12.5 6.75"
                stroke="#CBC7C7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </button>
        <div
          className={`overflow-hidden transition-max-height h-auto ml-[1rem] ${
            open ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          {children}
        </div>
      </Fragment>
    );
  }

  const url = path.path ? `${path.path}` : "";

  return (
    <NavLink
      className="group flex space-x-6 space-y-7 px-4 relative overflow-hidden"
      to={`/dashboard${url}`}
    >
      <span className="mt-7 object-contain text-center scale-75">
        {path?.icon ? <Icon {...fillProps} /> : null}
      </span>
      <span
        className={`${textClass} cursor-pointer group-hover:text-btn-green text-app-textGray min-w-72
          `}
      >
        {path.text}
      </span>
    </NavLink>
  );
};

const SideBar = ({
  navOpen,
  setNavOpen,
}: {
  navOpen: boolean;
  setNavOpen: any;
}) => {
  const loc = useRouter();
  return (
    <li
      onMouseLeave={() => setNavOpen(false)}
      onMouseEnter={() => setNavOpen(true)}
      className={`list-none fixed py-4 top-0 left-0 h-screen overflow-x-hidden overflow-y-auto bg-app-dark border-r-[1px] z-[1000] transition-width ${
        navOpen ? "w-[250px]" : "w-[75px]"
      }`}
    >
      <NavLink
        to="/"
        className={`flex justify-center px-7 font-sans min-w-[135px] transition-transform origin-top-left  text-transparent bg-clip-text  font-semibold mb-3 ${
          navOpen
            ? "translate-x-0 scale-100 "
            : "-translate-x-[8px] scale-[0.6]"
        }`}
      >
        <div className="mt-4">
          <AppLogo />
        </div>
      </NavLink>
      <div className="mt-8  h-[80%] overflow-hidden overflow-y-auto">
        {paths.map((p, i) => {
          if (p.subMenu) {
            return (
              <React.Fragment key={p.id}>
                <NavItem
                  navOpen={navOpen}
                  index={i}
                  isButton
                  path={p}
                  key={i}
                  loc={loc}
                >
                  <ul className="space-y-4 mb-2  ml-[2.5rem]">
                    {p.subMenu.map((sub: any, j: number) => (
                      <NavItem
                        key={j}
                        navOpen={navOpen}
                        path={sub}
                        loc={loc}
                        isButton={undefined}
                        index={undefined}
                      />
                    ))}
                  </ul>
                </NavItem>
              </React.Fragment>
            );
          }
          return (
            <NavItem
              navOpen={navOpen}
              key={p.id}
              path={p}
              loc={loc}
              isButton={undefined}
              index={undefined}
            />
          );
        })}
      </div>
      <button className="flex px-2 space-x-6 ml-[0.5rem] border-0">
        <span className="object-contain text-center  min-h-20 scale-75 ">
          <Logout className="w-[16px] h-[16px]" />
        </span>
        <span
          className={`mt-1.5 text-app-textGray font-medium hover:text-btn-green`}
        >
          SignOut
        </span>
      </button>
    </li>
  );
};

export { SideBar };
