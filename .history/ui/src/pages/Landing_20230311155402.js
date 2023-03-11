import React, { useState, ChangeEvent } from "react";
import Header from "../Header";
import CircularProgress from "@mui/material/CircularProgress";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { color } from "@mui/system";

function Scanner() {
  const [loader, setLoader] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  let navigate = useNavigate();

  function toggleLoader() {
    setLoader(!loader);
  }


const changeHandler = (event) => {
	setSelectedFile(event.target.files[0]);
	setIsFilePicked(true);
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
      >
      </div>
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
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  height:"20vh",
                }}>
                    <h1>Please upload audio File
    
                    </h1>
                </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height:"20vh",
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
          <div style={{
              display: "flex",
              alignItems: "center",
              height:"20vh",
            }}>
                {isFilePicked ? (
                    <div>
                        <Button onClick={() => {
                toggleLoader();
              }} variant="contained">
                            Submit
                        </Button>
                    </div>
                ) : (
                    <Button disable style={{color: 'gray'}}>
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
