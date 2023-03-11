import * as React from "react";
import AppBar from "@mui/core/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <ArrowBackIcon
            onClick={() => navigate(-1)}
            sx={{ position: "absolute", left: "5%" }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, position: "absolute", left: "40%" }}
          >
            ChordSense
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
