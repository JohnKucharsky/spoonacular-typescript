import { NavLink } from "react-router-dom";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import "./category.scss";

const Category = () => {
  return (
    <div className="category">
      <NavLink className="category__link" to="/cuisine/Italian">
        <FaPizzaSlice className="category__link--icon" />
        <h4>Italian</h4>
      </NavLink>
      <NavLink className="category__link" to="/cuisine/American">
        <FaHamburger className="category__link--icon" />
        <h4>American</h4>
      </NavLink>
      <NavLink className="category__link" to="/cuisine/Thai">
        <GiNoodles className="category__link--icon" />
        <h4>ThaiFood</h4>
      </NavLink>
      <NavLink className="category__link" to="/cuisine/Japanese">
        <GiChopsticks className="category__link--icon" />
        <h4>Japan</h4>
      </NavLink>
    </div>
  );
};

export default Category;
