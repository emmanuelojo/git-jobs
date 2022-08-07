import React, { useState } from "react";
import Card from "../components/Card";

const JobLists = () => {
  const [jobs, setJobs] = useState([]);

  // fetch('https://jobs.github.com/api').then((res) => {

  // })
  return (
    <div className="mt-5 flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-1/3 ">
        <div className="flex gap-2 text-n-blue">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Full time</label>
        </div>
        <div className="flex flex-col gap-3">
          <p className="mt-4 uppercase text-left text-n-dark-gray font-bold">
            location
          </p>

          <div className="w-full flex justify-start items-center bg-white shadow rounded px-2 py-1">
            <span className="material-symbols-outlined text-n-gray ">
              public
            </span>

            <input
              type="text"
              placeholder="City, state, zip code or country"
              className="h-10 w-full px-2 flex flex-grow text-sm text-n-gray border-none outline-none "
            />
          </div>

          <div className="flex flex-col gap-1 text-n-blue">
            <div className="flex items-center gap-2">
              <input type="radio" name="city" id="London" />
              <label htmlFor="London">London</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="city" id="Amsterdam" />
              <label htmlFor="Amsterdam">Amsterdam</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="city" id="NewYork" />
              <label htmlFor="NewYork">New York</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="city" id="Berlin" />
              <label htmlFor="Berlin">Berlin</label>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3">
        <Card />
      </div>
    </div>
  );
};

export default JobLists;
