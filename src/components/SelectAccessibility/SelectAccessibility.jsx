import React, { useState } from 'react';
import "./SelectAccessibility.scss";
import vectorIcon from "../../assets/icons/big-eye.svg";

const SelectAccessibility = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const toggleButton = (index) => {
    if (selectedButtons.includes(index)) {
      setSelectedButtons(selectedButtons.filter((item) => item !== index));
    } else {
      setSelectedButtons([...selectedButtons, index]);
    }
  };

  return (
    <div className="accessibility">
      <p className="accessibility__step">STEP 8</p>
      <img src={vectorIcon} alt="accessibility-icon" className="accessibility__icon" />
      <h2 className="accessibility__title">Accessibility</h2>
      <p className="accessibility__description">
        Let us know if you need Accessibility options.
      </p>
      <h4 className="accessibility__title">SELECT YOUR NEEDS</h4>
      <div className="accessibility__btn-container">
        <button
          className={`accessibility__btn-container-item ${
            selectedButtons.includes(1) ? 'accessibility__btn-container-item--active' : ''
          }`}
          onClick={() => toggleButton(1)}
        >
          Subtitles
        </button>
        <button
          className={`accessibility__btn-container-item ${
            selectedButtons.includes(2) ? 'accessibility__btn-container-item--active' : ''
          }`}
          onClick={() => toggleButton(2)}
        >
          Audio Description
        </button>
        <button
          className={`accessibility__btn-container-item ${
            selectedButtons.includes(3) ? 'accessibility__btn-container-item--active' : ''
          }`}
          onClick={() => toggleButton(3)}
        >
          Closed Captioning
        </button>
        <button
          className={`accessibility__btn-container-item ${
            selectedButtons.includes(4) ? 'accessibility__btn-container-item--active' : ''
          }`}
          onClick={() => toggleButton(4)}
        >
          Voice Assistance
        </button>
      </div>
    </div>
  );
};

export default SelectAccessibility;
