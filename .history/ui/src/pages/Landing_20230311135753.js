import React, { useState } from "react";
import Button from "@mui/material/Button";
import Header from "../Header";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useNavigate } from "react-router-dom";

function Scanner() {
  const [loader, setLoader] = useState(false);
  const [ipAddress, setIpAddress] = useState("");
  let navigate = useNavigate();

  function toggleLoader() {
    setLoader(!loader);
  }


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
            <UploadFileIcon></UploadFileIcon>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "20vh",
            }}
          >
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
