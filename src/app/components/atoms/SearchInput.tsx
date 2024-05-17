//@ts-nocheck
import { useState } from "react";
import Search from "../icons/Search";

const SearchInput = ({ placeholder, setSearchValue }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const onChangeFn = (e) => {
    setEnteredValue(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div className={`flex items-center -space-x-6`}>
      <Search className="relative" />
      <input
        value={enteredValue}
        onChange={onChangeFn}
        type="search"
        className="w-full px-8 py-2 leading-tight text-app-white placeholder-white  rounded-md shadow-lg bg-dark-grey border-[1px] appearance-none focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
