import React, { useState, ChangeEvent } from "react";
import Header from "../Header";
import CircularProgress from "@mui/material/CircularProgress";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

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
              alignItems: "center",
              height:"20vh",
            }}
          >
            <h1>
            Please add Audio File
        </h1>
            <input type="file" name="file" onChange={changeHandler} />

                {isFilePicked ? (
                    <>
                    <div>
                        <p>Filename: {selectedFile.name}</p>
                        <p>Filetype: {selectedFile.type}</p>
                        <p>Size in bytes: {selectedFile.size}</p>
                    </div>
                    <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <Button
                      onClick={toggleLoader}
                      variant="contained"
                    >
                      Submit
                    </Button>
                  </div>
                  </>
                ) : (
                    <div
            style={{
              display: "flex",
            }}
          >
            <Button
              disabled
            >
              Submit
            </Button>
          </div>
                )}
          </div>
        </>
      )}
    </>
  );
}

export default Scanner;
