import React from "react";
import "./App.css";
import Card from "./Card";
import { datas } from "./datas";

// const url = "./datas.json";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  // const [datas, setDatas] = React.useState(url);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // React.useEffect(() => {
  //   fetch(url)
  //     .then((resp) => {
  //       if (resp.status >= 200 && resp.status <= 299) {
  //         console.log("hello");
  //         setDatas(resp);
  //         setIsLoading(false);
  //       } else {
  //         setIsLoading(true);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
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
