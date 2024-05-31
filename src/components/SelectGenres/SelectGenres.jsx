import React from "react";
import MultiSelect from "../MultiSelect/MultiSelect";

const genres = [
  { value: "action", label: "Action" },
  { value: "comedy", label: "Comedy" },
  { value: "drama", label: "Drama" },
  { value: "fantasy", label: "Fantasy" },
  { value: "horror", label: "Horror" },
  { value: "mystery", label: "Mystery" },
  { value: "romance", label: "Romance" },
  { value: "sci-fi", label: "Sci-Fi" },
  { value: "thriller", label: "Thriller" },
];

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
