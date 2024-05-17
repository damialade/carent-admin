//@ts-nocheck
import clamp from "lodash/clamp";
import React, { useState } from "react";
import { useCustomPagination } from "@/hooks/useCustomPagination";
import { Pills } from "@/utils/types";

const PaginatePills = ({
  noOfPages,
  currentPage,
  onPageChange,
  previousPage,
  nextPage,
  goToPage,
  isManual,
}: Pills) => {
  const range = useCustomPagination({
    noOfPages,
    currentPage,
  });

  const [jump, setJump] = useState("");

  const onClick = (page: any) => () => {
    const newPage = clamp(page, 1, noOfPages);

    window.scrollTo({
      top: 0,
      left: 0,
    });

    onPageChange(parseInt(newPage));
  };

  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    value = isNaN(value) ? 1 : value;
    value = clamp(value, 1, noOfPages);

    setJump(value);
  };

  const go = () => {
    if (isManual) {
      onClick(+jump)();
    } else {
      goToPage(+jump - 1);
    }
  };

  const goTo = (page) => () => {
    if (isManual) {
      onClick(page)();
    } else {
      goToPage(+page - 1);
    }
  };

  return (
    <nav aria-label="Pagination tabs">
      <ul className="flex flex-wrap items-center justify-center my-6 space-x-2 ">
        <li>
          <button
            onClick={isManual ? onClick(currentPage - 1) : previousPage}
            disabled={isManual ? currentPage === 1 : currentPage === 0}
            className="block aspect-square p-2.5 my-2  leading-tight text-app-black bg-[#e8f8ee] rounded-full hover:bg-btn-green hover:text-app-white disabled:opacity-50"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
        {range.map((page, i) =>
          page === "..." ? (
            <li key={i}>
              <span>...</span>
            </li>
          ) : (
            <li key={i}>
              <button
                onClick={goTo(page)}
                className={`py-2 min-w-[40px]  aspect-square my-2 p-2.5 leading-tight  border rounded-full  hover:font-bold hover:text-xl ${
                  currentPage === (isManual ? page : page - 1)
                    ? "!text-app-black !bg-app-yellow"
                    : "text-app-yellow bg-app-black"
                }`}
              >
                {page}
              </button>
            </li>
          )
        )}
        <li>
          <button
            onClick={isManual ? onClick(currentPage + 1) : nextPage}
            disabled={
              isManual
                ? currentPage === noOfPages
                : currentPage === noOfPages - 1
            }
            className={`block p-2.5 my-2 aspect-square  leading-tight text-app-black bg-[#e8f8ee] rounded-full hover:bg-btn-green hover:text-app-white disabled:opacity-50 `}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>

      <div className="flex items-center justify-center my-3 space-x-2">
        <p className="text-app-white">Jump to page: </p>
        <input
          className="p-2 border-[1px] appearance-none focus:outline-none bg-[#e8f8ee] rounded-lg text-center min-w-[60px] max-w-[90px]"
          type="number"
          min="1"
          onChange={handleChange}
        />
        <button
          className="p-2 font-medium text-app-white rounded-lg bg-dark-grey"
          onClick={go}
        >
          Go
        </button>
      </div>
    </nav>
  );
};

export default PaginatePills;
