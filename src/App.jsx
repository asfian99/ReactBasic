import React, { useState, useEffect } from "react";
import "./tailwind.output.css";
import "./App.css";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.netlify.app/api/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Loading tampil saat melakukan fetching data (loading = true)
  if (loading) {
    return (
      <section>
        <h1 className="text-3xl font-bold text-blue-800 text-center m-5">
          loading...
        </h1>
      </section>
    );
  }

  // destructuring jobs setelah fetching data
  const { company, dates, duties, title } = jobs[value];
  return (
    <>
      <h1 className="text-5xl font-bold text-blue-800 text-center m-5">Jobs</h1>
      <div className="flex flex-col px-10 md:flex-row">
        {/* Navigation */}
        <div className="flex flex-none flex-row justify-center w-5/5 m-2 md:flex-col md:justify-start md:w-1/5">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => setValue(index)}
                className={`m-2 p-4 font-semibold tracking-wider ${
                  index === value ? "text-white bg-blue-500" : "text-blue-500 "
                } border-2 border-blue-500 rounded duration-150 hover:text-white hover:bg-blue-400 hover:border-black focus:outline-none`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        {/* Job Info */}
        <div className="flex-1 w-5/5 m-2 bg-gray-100 rounded-lg p-4 md:w-4/5">
          <h1 className="text-2xl text-blue-900 mb-2">{title}</h1>
          <h4 className="w-auto inline-block px-3 py-1 rounded-md bg-blue-200 font-bold text-blue-500">
            {company}
          </h4>
          <p className="text-lg text-blue-900 text-opacity-75 tracking-wider my-4">
            {dates}
          </p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="flex flex-row items-center my-4">
                <FaAngleDoubleRight className="text-blue-500 font-bold w-8 " />
                <p className="inline mx-4 text-blue-900">{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
