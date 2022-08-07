import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <div className="p-2 w-full flex justify-between gap-3 md:gap-4 bg-white shadow rounded">
        <img
          src="src/assets/logo.png"
          alt="image"
          className="h-20 w-20 rounded"
        />

        <div className="flex flex-col flex-grow gap-1 md:gap-2">
          <p className="text-left text-xs text-n-blue">Company Name</p>
          <Link to="/job-details">
            {" "}
            <p className="text-left text-xl text-n-blue font-bold">
              Frontend Dev
            </p>
          </Link>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-5">
            <p className="h-7 w-max px-2 text-left flex justify-start md:justify-center items-center text-xs md:text-sm text-n-blue border border-n-blue rounded">
              Full time
            </p>
            <div className="flex items-center gap-2 md:gap-5 text-n-gray">
              <div className="flex items-center gap-1 md:gap-2 text-xs">
                <span className="material-symbols-outlined text-sm">
                  public
                </span>
                <p className="">New York</p>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-xs">
                <span className="material-symbols-outlined text-sm">
                  schedule
                </span>
                <p className="">5 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
