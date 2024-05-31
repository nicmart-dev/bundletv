import React from "react";
import MultiSelect from "../MultiSelect/MultiSelect";
import genres from "../../data/genres.json"; // Import the JSON file

const SelectGenres = () => {
  const handleGenreChange = (selectedGenres) => {
    console.log("Selected genres:", selectedGenres);
  };

  return (
    <>
      <MultiSelect
        options={genres}
        placeholder="Select genres..."
        onChange={handleGenreChange}
      />
    </>
  );
};
export default SelectGenres;
