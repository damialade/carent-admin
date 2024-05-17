import React, { useState } from "react";
import { AppFooter, AppHeader, SideBar } from "./Navigation";

const Memoize = ({ children }: { children: React.ReactNode }) => (
  <section className="-mr-[255px]">{children}</section>
);

const className = "transition-transform origin-left";

const Children = React.memo(Memoize);

const WithSideBar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-app-dark  min-h-screen grid grid-cols-[80px_262px_minmax(0,1fr)] overflow-x-hidden overflow-y-auto">
      <aside className={`min-h-screen`}></aside>

      <div
        className={`${className}   min-h-screen ${
          isOpen ? "scale-x-100" : "scale-x-0"
        }`}
      ></div>

      <SideBar navOpen={isOpen} setNavOpen={setIsOpen} />
      <main>
        <AppHeader navOpen={isOpen} setNavOpen={setIsOpen} />
        <div
          className={`${className} pt-4  w-full min-h-screen ${
            isOpen ? "-translate-x-24" : "-translate-x-[262px]"
          }
          `}
        >
          <Children>{children}</Children>
        </div>
        <div
          className={`${isOpen ? "-translate-x-28" : "-translate-x-[272px]"}`}
        >
          <AppFooter />
        </div>
      </main>
    </div>
  );
};

export default WithSideBar;
