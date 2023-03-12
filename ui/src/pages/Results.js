import Header from "../Header";
import React, { useEffect, useState } from "react";
import myImage from "../images/cute-beavers.png";

const Results = () => {
  const data = localStorage.getItem("results");
  console.log(data);
  const statement = `Gopher predicted that this could be ${data}!`;
  return (
    <>
      <Header />
      <h1>{statement}</h1>
      <div>
        <img src={myImage} alt="Results" />
      </div>
    </>
  );
};

export default Results;
