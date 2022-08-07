import React from "react";

const Navbar = () => {
  return (
    <div className="h-40 w-full mt-8 flex justify-center items-center bg-search-bg rounded-lg relative">
      <div className="p-3 md:p-1 w-[90%] md:w-[60%] flex justify-center items-center bg-white rounded-md">
        <span className="material-symbols-outlined ml-2 text-n-dark-gray">
          work
        </span>
        <input
          type="text"
          placeholder="Title, companies, expertise or benefits"
          className="h-10 px-2 flex flex-grow text-sm text-n-dark-gray border-none outline-none "
        />

        <button className="h-10 w-24 flex justify-center items-center bg-n-light-blue text-white text-sm rounded">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
