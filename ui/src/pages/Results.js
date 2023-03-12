import Header from "../Header";
import React, { useEffect, useState } from "react";
import myImage from "../images/cute-beavers.png";

const Results = () => {
  const [audioURL, setAudioURL] = useState(null);
  useEffect(() => {
    const results = localStorage.getItem("results");
    if (!results) {
      console.log("No results found in localStorage");
      return;
    }

    try {
      const blob = new Blob([results], { type: "image/png" });
      const url = URL.createObjectURL(blob);
      setAudioURL(url);
    } catch (err) {
      console.error("Invalid results in localStorage", err);
    }
  }, []);
  return (
    <>
      <Header />
      <h1>Your Audio Image is now Available!</h1>
      <div>
        <img src={myImage} alt="Results" />
      </div>
    </>
  );
};

export default Results;
