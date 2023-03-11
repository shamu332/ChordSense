import React, { useState, ChangeEvent } from "react";
import Header from "../Header";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Scanner() {
  const [loader, setLoader] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  let navigate = useNavigate();

  async function toggleLoader() {
    setLoader(!loader);
    await new Promise((r) => setTimeout(r, 2000));
    navigate(`/results`);
  }

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const sendAudioFile = () => {
    let formData = new FormData();
    let audioFile = document.querySelector("#file");
    formData.append("audio", audioFile.files[0]);
    axios.post("http://localhost:3000/api/v1/audioAnalysis", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
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
            height: "10vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "20vh",
            }}
          >
            <h1>Please upload audio File</h1>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "20vh",
            }}
          >
            <input type="file" name="file" onChange={changeHandler} />
            {isFilePicked ? (
              <div>
                <p>Filename: {selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
              </div>
            ) : (
              <p></p>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "20vh",
            }}
          >
            {isFilePicked ? (
              <div>
                <Button
                  onClick={() => {
                    toggleLoader();
                  }}
                  variant="contained"
                >
                  Submit
                </Button>
              </div>
            ) : (
              <Button disable style={{ color: "gray" }}>
                Submit
              </Button>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Scanner;
