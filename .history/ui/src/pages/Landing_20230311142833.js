import React, { useState } from "react";
import Header from "../Header";
import CircularProgress from "@mui/material/CircularProgress";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useNavigate } from "react-router-dom";

function Scanner() {
  const [loader, setLoader] = useState(false);
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
            <Button variant="contained">Contained</Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "20vh",
            }}
          >
          </div>
        </>
      )}
    </>
  );
}

export default Scanner;
