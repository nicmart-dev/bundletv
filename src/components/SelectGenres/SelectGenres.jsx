import React from "react";
import MultiSelect from "../MultiSelect/MultiSelect";
import genres from "../../data/genres.json"; // Import the JSON file
import genresIcon from "../../assets/icons/big-drama.svg";
import "./SelectGenres.scss";

const SelectGenres = () => {
  const handleGenreChange = (selectedGenres) => {
    console.log("Selected genres:", selectedGenres);
  };

  return (
    <div className="genres">
      <p className="genres__step">STEP 2</p>
      <img src={genresIcon} alt="budget-icon" className="genres__icon" />
      <h2 className="genres__title">Genres</h2>
      <p className="genres__description">
        Tell us what genres you enjoy watching.
      </p>
      <MultiSelect
        options={genres}
        placeholder="Select genres..."
        onChange={handleGenreChange}
      />
    </div>
  );
};
export default SelectGenres;
