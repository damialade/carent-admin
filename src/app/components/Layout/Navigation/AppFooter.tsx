import React from "react";

const date = new Date();
const currentYear = date.getFullYear();

const AppFooter = () => {
  return (
    <div className="w-screen bg-app-dark text-app-white text-center p-2 font-semibold">
      <p>
        Built by{" "}
        <a
          className="text-btn-green"
          href="https://fusionintel.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Damilola Aladeokin
        </a>{" "}
        ©{currentYear}
      </p>
    </div>
  );
};

export { AppFooter };
