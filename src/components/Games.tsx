import React from "react";
import { ipcRenderer, gameAPI, projectFileAPI } from "../renderer/electron";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function Games() {
  const [gameModal, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  let game = [
    {
      gameTitle: "",
      gameVersion: "",
      gamePlatformWindows: false,
      gamePlatformMac: false,
      gamePlatformMobile: false,
      gameEngine: "",
      gameGenre: "",
      gameDeveloper: "",
      gamePublisher: "",
      isEarlyAccess: false,
      isReleased: false,
      gameDownloadMacURL: "",
      gameDownloadWinURL: "",
      gameLogoURL: "",
      gameBannerURL: "",
      gamePosterURL: "",
      gameBinaryURL: "",
      gameHeadline: "",
      gameDescription: "",
    },
  ];
  return (
    <div>
      <ImageList sx={{ width: 500, height: 450 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">December</ListSubheader>
          <ImageListItem></ImageListItem>
        </ImageListItem>
      </ImageList>
    </div>
  );
}
