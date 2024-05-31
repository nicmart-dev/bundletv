import "./SelectKids.scss";
import kidsIcon from "../../assets/icons/big-train-front.svg";

const SelectKids = () => {
  return (
    <div className="kids">
      <p className="kids__step">STEP 7</p>
      <img src={kidsIcon} alt="kids-icon" className="kids__icon" />
      <h2 className="kids__title">Kids at Home</h2>
      <p className="kids__description">
        Are there any children under 18 years old in your household?
      </p>
      <label className="kids__label">SELECT ONE</label>
      <div className="kids__btn-container">
        <button className="kids__btn-container-item kids__btn-container-item--primary">
          Yes
        </button>
        <button className="kids__btn-container-item">No</button>
      </div>
    </div>
  );
};

export default SelectKids;
