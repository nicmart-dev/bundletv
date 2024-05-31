import "./SelectBudget.scss";
import budgetIcon from "../../assets/icons/big-circle-dollar-sign.svg";

const SelectBudget = () => {
  return (
    <div className="budget">
      <p className="budget__step">STEP-1</p>
      <img src={budgetIcon} alt="budget-icon" className="budget__icon" />
      <h2 className="budget__title">Your budget</h2>
      <p className="budget__description">
        Start with a preset budget and see what your options are.
      </p>
      <label className="budget__label">SELECT ONE</label>
      <div className="budget__btn-container">
        <button className="budget__btn-container-item">Less than $30/mo</button>
        <button className="budget__btn-container-item">Less than $50/mo</button>
        <button className="budget__btn-container-item budget__btn-container-item--active">
          Less than $100/mo
        </button>
        <button className="budget__btn-container-item">
          No present budget
        </button>
      </div>
    </div>
  );
};

export default SelectBudget;
