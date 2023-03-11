import React, { useState } from "react";
import Header from "../Header";
import CircularProgress from "@mui/material/CircularProgress";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Button from '@mui/material/Button';
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
      >
        <h1>
            Please add Audio File
        </h1>
      </div>
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
              height:"20vh",
            }}
          >
            <Button variant="contained"
             style={{
                width: '25%', 
                height: '50%',
                borderRadius: '50%'}}>
                <UploadFileIcon 
                style={{
                    fontSize: "350%"
                }}></UploadFileIcon>
                </Button>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                toggleLoader();
              }}
            >
              Submit
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default Scanner;
