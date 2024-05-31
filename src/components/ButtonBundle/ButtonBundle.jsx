import "./ButtonBundle.scss";
import { Link } from "react-router-dom";

const ButtonBundle = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="ButtonBundle">
      <Link to="/package" onClick={handleClick}>
        <button className="ButtonBundle__btn">Create Your Bundle</button>
      </Link>
    </div>
  );
};

export default ButtonBundle;
