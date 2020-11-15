import React, { useState, sueEffect, useEffect } from "react";
import "./App.css";

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

  if (loading) {
    return (
      <section>
        <h1>loading...</h1>
      </section>
    );
  }

  return <h1>Jobs</h1>;
}

export default App;
