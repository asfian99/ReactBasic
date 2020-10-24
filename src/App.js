import React from "react";
import "./App.css";
import Card from "./Card";
import { datas } from "./datas";

function App() {
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
