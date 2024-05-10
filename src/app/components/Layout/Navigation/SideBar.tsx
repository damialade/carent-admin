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

const NavLink = (props: any) => {
  const { to, children } = props;
  return (
    <Link legacyBehavior href={to}>
      <span {...props}>{children}</span>
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
    path: "/home",
    text: "Dashboard",
    icon: Home,
  },
  {
    id: 2,
    path: "/vehicles",
    text: "Vehicles",
    icon: Vehicle,
  },
  {
    id: 2,
    path: "/daily-planner",
    text: "Daily Planner",
    icon: Planner,
  },
  {
    id: 2,
    path: "/reservations",
    text: "Reservations",
    icon: Reservations,
  },
  {
    id: 2,
    path: "/customers",
    text: "Customers",
    icon: Customers,
  },
  {
    id: 2,
    path: "/agreements",
    text: "Agreements",
    icon: Agreements,
  },
  {
    id: 2,
    path: "/reports",
    text: "Reports",
    icon: Reports,
  },
  // {
  //   id: 2,
  //   text: "Tables",
  //   icon: Tables,
  //   subMenu: [
  //     {
  //       id: 3,
  //       path: "tables/revenue-centre",
  //       text: "Revenue Centre",
  //       icon: Dot,
  //     },
  //     {
  //       id: 4,
  //       path: "tables/table",
  //       text: "Tables",
  //       icon: Dot,
  //     },
  //     {
  //       id: 35,
  //       path: "tables/charge-type",
  //       text: "Charge Types",
  //       icon: Dot,
  //     },
  //     {
  //       id: 36,
  //       path: "tables/sales-tax",
  //       text: "Sales Tax",
  //       icon: Dot,
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   path: "items",
  //   text: "Items",
  //   icon: Items,
  //   subMenu: [
  //     {
  //       id: 6,
  //       path: "items/preparation-area",
  //       text: "Preparation Area",
  //       icon: Dot,
  //     },
  //     {
  //       id: 7,
  //       path: "items/item-class",
  //       text: "Item Class",
  //       icon: Dot,
  //     },
  //     {
  //       id: 8,
  //       path: "items/items",
  //       text: "Items",
  //       icon: Dot,
  //     },
  //     {
  //       id: 35,
  //       path: "items/unitOfMeasurement",
  //       text: "Unit Of Measurement",
  //       icon: Dot,
  //     },
  //     {
  //       id: 36,
  //       path: "items/unitOfMeasurementRelationship",
  //       text: "UoM Relationship",
  //       icon: Dot,
  //     },
  //   ],
  // },

  // {
  //   id: 9,
  //   text: "Inventory",
  //   icon: Stock,
  //   subMenu: [
  //     {
  //       id: 10,
  //       path: "stocks/overview",
  //       text: "Overview",
  //       icon: Dot,
  //     },
  //     {
  //       id: 11,
  //       path: "stocks/stock-request",
  //       text: "Stock Request",
  //       icon: Dot,
  //     },
  //     {
  //       id: 12,
  //       path: "stocks/purchase-order",
  //       text: "Purchase Order",
  //       icon: Dot,
  //     },
  //     {
  //       id: 13,
  //       path: "stocks/stock-receipt",
  //       text: "Stock Receipt",
  //       icon: Dot,
  //     },
  //     {
  //       id: 14,
  //       path: "stocks/stock-transfer-request",
  //       text: "Stock Transfer Request",
  //       icon: Dot,
  //     },
  //     {
  //       id: 15,
  //       path: "stocks/stock-transfer-receipt",
  //       text: "Stock Transfer Receipt",
  //       icon: Dot,
  //     },
  //     {
  //       id: 37,
  //       path: "stocks/stock-take",
  //       text: "Stock Take",
  //       icon: Dot,
  //     },
  //     {
  //       id: 38,
  //       path: "stocks/stock-adjustment",
  //       text: "Stock Adjustment",
  //       icon: Dot,
  //     },
  //     {
  //       id: 16,
  //       path: "stocks/vendors",
  //       text: "Vendors",
  //       icon: Dot,
  //     },
  //     {
  //       id: 17,
  //       path: "stocks/locations",
  //       text: "Locations",
  //       icon: Dot,
  //     },
  //   ],
  // },
  // {
  //   id: 18,
  //   path: "staff",
  //   text: "Staff",
  //   icon: Staff,
  // },
  // {
  //   id: 19,
  //   path: "sessions",
  //   text: "Sessions",
  //   icon: Session,
  // },
  // {
  //   id: 39,
  //   path: "discount",
  //   text: "Discount & Promo ",
  //   icon: Stock,
  //   subMenu: [
  //     {
  //       id: 21,
  //       path: "discount/discount-code",
  //       text: "Discount Codes",
  //       icon: Dot,
  //     },
  //   ],
  // },
  // {
  //   id: 20,
  //   path: "reports",
  //   text: "Reports",
  //   icon: Reports,
  //   subMenu: [
  //     {
  //       id: 21,
  //       path: "reports/voided-report",
  //       text: "Voided Report",
  //       icon: Dot,
  //     },
  //     {
  //       id: 22,
  //       path: "reports/staff-complementary-report",
  //       text: "Staff Complementary Report",
  //       icon: Dot,
  //     },
  //     {
  //       id: 23,
  //       path: "reports/customer-complementary-report",
  //       text: "Customer Complementary Report",
  //       icon: Dot,
  //     },
  //     {
  //       id: 24,
  //       path: "reports/sales-by-individuals",
  //       text: "Sales By Individuals",
  //       icon: Dot,
  //     },
  //     {
  //       id: 25,
  //       path: "reports/sales-by-items",
  //       text: "Sales By Items",
  //       icon: Dot,
  //     },
  //     {
  //       id: 26,
  //       path: "reports/discount-daily",
  //       text: "Discount Daily",
  //       icon: Dot,
  //     },
  //     {
  //       id: 27,
  //       path: "reports/operations",
  //       text: "Operations",
  //       icon: Dot,
  //     },
  //     {
  //       id: 28,
  //       path: "reports/all-checks",
  //       text: "All Checks",
  //       icon: Dot,
  //     },
  //     // {
  //     //   id: 29,
  //     //   path: "reports/check-details",
  //     //   text: "Check Details",
  //     //   icon: Dot,
  //     // },
  //     {
  //       id: 30,
  //       path: "reports/sales-mix-summary",
  //       text: "Sales Mix Summary",
  //       icon: Dot,
  //     },
  //   ],
  // },
  // // {
  // //   id: 31,
  // //   path: "menu",
  // //   text: "Menu",
  // //   icon: Items,
  // // },
  // {
  //   id: 31,
  //   path: "channels",
  //   text: "Channels",
  //   icon: Channels,
  //   subMenu: [
  //     {
  //       id: 32,
  //       path: "",
  //       text: "Orders",
  //       icon: Dot,
  //     },
  //     {
  //       id: 33,
  //       path: "channels/channel-manager",
  //       text: "Channel Manager",
  //       icon: Dot,
  //     },
  //   ],
  // },
  // {
  //   id: 34,
  //   path: "issues",
  //   text: "Issues",
  //   icon: Issues,
  // },
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

  const url = path.path ? `/${path.path}` : "";

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

  const url = path.path ? `/${path.path}` : "";

  return (
    <NavLink
      className="group flex space-x-6 space-y-7 px-4 relative overflow-hidden"
      to={`/dashboard${url}`}
    >
      <span className="mt-7 object-contain text-center scale-75">
        {path?.icon ? <Icon {...fillProps} /> : null}
      </span>
      <span
        className={`${textClass}  group-hover:text-btn-green text-app-textGray min-w-72
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
        navOpen ? "w-[300px]" : "w-[80px]"
      }`}
    >
      <NavLink
        to="/"
        className={`flex justify-center px-7 font-sans min-w-[140px] transition-transform origin-top-left  text-transparent bg-clip-text  font-semibold mb-3 ${
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
      <button className="flex px-4 space-x-6 ml-[0.5rem] border-0">
        <span className="object-contain text-center  min-h-20 ">
          <Logout className="w-[16px] h-[16px]" />
        </span>
        <span className={`mt-1 text-app-textGray font-medium`}>SignOut</span>
      </button>
    </li>
  );
};

export { SideBar };
