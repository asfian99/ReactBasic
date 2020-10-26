import React from "react";
import "./App.css";
import Card from "./Card";
import { datas } from "./datas";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  // const [datas, setDatas] = React.useState(url);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1 className="title">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <h1 className="title">Our Tours</h1>
      <div className="container">
        {datas.map((data) => {
          return <Card key={data.id} {...data} />;
        })}
      </div>
    </>
  );
}

export default App;
