import React from "react";
import { Link, Route } from "react-router-dom";
import { useState } from "react";
import playIcon from "../../assets/icons/big-play-square.svg";
import MultiSelect from "../MultiSelect/MultiSelect";

import "./SelectChannels.scss";

function SelectChannels() {
  const channels = [
    { value: "bbc", label: "BBC" },
    { value: "cnn", label: "CNN" },
    { value: "fox-news", label: "Fox News" },
    { value: "al-jazeera", label: "Al Jazeera" },
    { value: "nbc", label: "NBC" },
    { value: "abc", label: "ABC" },
    { value: "cbs", label: "CBS" },
    { value: "msnbc", label: "MSNBC" },
    { value: "cnbc", label: "CNBC" },
    { value: "bloomberg", label: "Bloomberg" },
    { value: "espn", label: "ESPN" },
    { value: "sky-sports", label: "Sky Sports" },
    { value: "fox-sports", label: "Fox Sports" },
    { value: "nfl-network", label: "NFL Network" },
    { value: "nba-tv", label: "NBA TV" },
    { value: "mlb-network", label: "MLB Network" },
    { value: "nhl-network", label: "NHL Network" },
    { value: "golf-channel", label: "Golf Channel" },
    { value: "tennis-channel", label: "Tennis Channel" },
    { value: "olympic-channel", label: "Olympic Channel" },
    { value: "food-network", label: "Food Network" },
    { value: "cooking-channel", label: "Cooking Channel" },
    { value: "travel-channel", label: "Travel Channel" },
    { value: "diy-network", label: "DIY Network" },
    { value: "hgtv", label: "HGTV" },
    { value: "discovery-channel", label: "Discovery Channel" },
    { value: "history-channel", label: "History Channel" },
    { value: "national-geographic", label: "National Geographic" },
    { value: "animal-planet", label: "Animal Planet" },
    { value: "cartoon-network", label: "Cartoon Network" },
    { value: "disney-channel", label: "Disney Channel" },
    { value: "nickelodeon", label: "Nickelodeon" },
    { value: "boomerang", label: "Boomerang" },
    { value: "mtv", label: "MTV" },
    { value: "vh1", label: "VH1" },
    { value: "bet", label: "BET" },
    { value: "cmt", label: "CMT" },
    { value: "comedy-central", label: "Comedy Central" },
    { value: "tbs", label: "TBS" },
    { value: "tnt", label: "TNT" },
    { value: "usa-network", label: "USA Network" },
    { value: "fx", label: "FX" },
    { value: "amc", label: "AMC" },
    { value: "tcm", label: "TCM" },
    { value: "hallmark-channel", label: "Hallmark Channel" },
    { value: "lifetime", label: "Lifetime" },
    { value: "own", label: "OWN" },
    { value: "bravo", label: "Bravo" },
  ];
  const handleChannelChange = (selectedChannels) => {
    console.log("Selected channels:", selectedChannels);
  };

  return (
    <section className="hd-channels">
      <p className="hd-channels__select">STEP 4</p>
      <div className="hd-channels__icon">
        <img src={playIcon} alt="HD Channels" />
      </div>

      <h2 className="hd-channels__title">Preferred Channels</h2>
      <p className="hd-channels__description">
        Based on your preset budget, you will be able to select 5 HD channels.
      </p>
      <p className="hd-channels__select2">SELECT 10</p>
      <div className="hd-channels__select-channels">
        <MultiSelect
          options={channels}
          placeholder="Select channels..."
          onChange={handleChannelChange}
        />
      </div>
    </section>
  );
}

export default SelectChannels;
