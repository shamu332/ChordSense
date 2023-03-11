import React, { useState } from "react";
import Button from "@mui/material/Button";
import Header from "../Header";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Scanner() {
  const [loader, setLoader] = useState(false);
  const [ipAddress, setIpAddress] = useState("");
  let navigate = useNavigate();

  function toggleLoader() {
    setLoader(!loader);
  }

  const sendIp = () => {
    let obj = {
      ip_address: ipAddress,
    };
    axios
      .post("http://localhost:8080/api/v1/scanner", obj)
      .then((response) => {
        console.log("Post request is: ", response.status);
        return getIp(response.status);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        alert("Sorry! There was an issue posting to the database!");
      });
  };

  const getIp = (responsefromPost) => {
    if (responsefromPost === 200) {
      axios
        .get(`http://localhost:8080/api/v1/scanner/${ipAddress}`)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("results", JSON.stringify(response.data));
          navigate(`/results`);
        })
        .catch((error) => {
          console.error("There was an error!", error);
          alert("Sorry! There was an issue fetching from the database!");
        });
    } else {
      alert("Sorry! There is an issue with our Servers!");
    }
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: "30vh",
        }}
      ></div>
      {loader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Enter Your IP Address"
              variant="outlined"
              onChange={(e) => setIpAddress(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "20vh",
            }}
          >
            {/* <Button onClick={toggleLoader} variant="contained">
              SCAN
            </Button> */}
            <Button
              variant="contained"
              onClick={() => {
                toggleLoader();
                sendIp();
              }}
            >
              SCAN
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default Scanner;
