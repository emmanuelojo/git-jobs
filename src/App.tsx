import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/Navbar";
import JobLists from "./pages/JobLists";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App p-4 md:px-0 w-full md:w-4/5 mx-auto">
      <BrowserRouter>
        <nav className="md:mt-5 flex justify-start">
          <h3 className="text-lg text-n-blue font-bold">
            Github <span className="font-light text-black">Jobs</span>
          </h3>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job-details/:id" element={<JobDetails />} />
          </Routes>
        </div>
      </BrowserRouter>

      <div className="mt-60 mb-4 flex justify-center items-center text-xs text-gray-500 font-semibold attribution">
        created by
        <a href="https://jekon-dev.netlify.app/" className="ml-1">
          Jekon
        </a>{" "}
        -
        <a href="https://devchallenges.io/" target="_blank" className="ml-1">
          devChallenges.io
        </a>
      </div>
    </div>
  );
}

export default App;
