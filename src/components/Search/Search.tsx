import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./search.scss";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <FaSearch className="search__form--icon" />
        <input
          className="search__form--input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
