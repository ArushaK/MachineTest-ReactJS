import React, { useState, useContext } from "react";
import Card from "../UI/Card/Card";
import Dropdown from "./Dropdown";
import Information from "./Information";
import classes from "./Home.module.css";

function Home() {
  const [data, setData] = useState("");

  const handleCallback = (childData) => {
    setData(childData);
  };
  return (
    <main>
      <Card className={classes.home}>
        <Dropdown getData={handleCallback}></Dropdown>
        <Information sendData={data} />
      </Card>
    </main>
  );
}

export default Home;
