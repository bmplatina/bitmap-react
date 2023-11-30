import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import WebView from "./components/WebView";
import Games from "./components/Games";

function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <div className="topBar">
          <div className="titleBar">
            <div className="title">Bitmap</div>
          </div>
          <Box
            sx={{ maxWidth: { xs: 480, sm: 960 }, bgcolor: "background.paper" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              scrollButtons="auto"
              aria-label="Main Menu"
            >
              <Tab label="Wiki" />
              <Tab label="Newsroom" />
              <Tab label="Blog" />
              <Tab label="Games" />
              <Tab label="Project Files" disabled />
              <Tab label="Other Downloads" disabled />
              <Tab label="Settings" disabled />
            </Tabs>
          </Box>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<WebView />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
