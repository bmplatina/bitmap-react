import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import WebView from "./components/WebView";
import Games from "./components/Games";

function Header() {
  if (process.platform === "darwin")
    return (
      <div>
        <div className="topBar">
          <div className="titleBar">
            <div className="title">Bitmap</div>
          </div>
        </div>
      </div>
    );
    else return (
      <div>
        <div className="topBar">
          <div className="titleBar">
            <div className="title">Bitmap</div>
          </div>
        </div>
      </div>
    );
}

function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
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
      <Routes>
        <Route path="/" element={<WebView />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
