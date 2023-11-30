import React from "react";

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
  return <div>게임</div>;
}
