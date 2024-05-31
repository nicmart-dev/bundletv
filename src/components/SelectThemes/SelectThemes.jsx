import React from "react";
import { Link, Route } from "react-router-dom";
import { useState } from "react";
import heartIcon from "../../assets/icons/big-heart.svg";
import MultiSelect from "../MultiSelect/MultiSelect";

import "./SelectThemes.scss";

function SelectThemes() {
  const themes = [
    
    { value: "action", label: "Action" },
    { value: "adventure", label: "Adventure" },
    { value: "animation", label: "Animation" },
    { value: "comedy", label: "Comedy" },
    { value: "crime", label: "Crime" },
    { value: "drama", label: "Drama" },
    { value: "family", label: "Family" },
    { value: "fantasy", label: "Fantasy" },
    { value: "history", label: "History" },
    { value: "horror", label: "Horror" },
    { value: "mystery", label: "Mystery" },
    { value: "romance", label: "Romance" },
    { value: "science-fiction", label: "Science Fiction" },
    { value: "thriller", label: "Thriller" },
    { value: "war", label: "War" },
    { value: "western", label: "Western" },
  ];
  const handleChannelChange = (selectedChannels) => {
    console.log("Selected channels:", selectedChannels);
  };

  return (
    <section className="hd-channels">
      <p className="hd-channels__select">STEP 3</p>
      <div className="hd-channels__icon">
        <img src={heartIcon} alt="HD Channels" />
      </div>

      <h2 className="hd-channels__title">Add Channels by themes</h2>
      <p className="hd-channels__description">
        Based on your preset budget, you will be able to select 2 HD themes.
      </p>
      <p className="hd-channels__select2">SELECT 2</p>
      <div className="hd-channels__select-channels">
        <MultiSelect
          options={themes}
          placeholder="Select Themes..."
          onChange={handleChannelChange}
        />
      </div>
    </section>
  );
}

export default SelectThemes;
