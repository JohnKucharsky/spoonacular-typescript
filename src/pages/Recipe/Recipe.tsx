import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./recipe.scss";

const Recipe = () => {
  const [details, setDetails] = useState({} as detailsType);
  const [activeTab, setActiveTab] = useState("instructions");

  // types
  type detailsType = {
    title: string;
    image: string;
    summary: string;
    instructions: string;
    extendedIngredients: Array<ing>;
  };
  type ing = {
    id: number;
    original: string;
  };
  // types

  let params = useParams();
  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();
      setDetails(detailData);
    };
    fetchDetails();
  }, [params.name]);
  return (
    <motion.div
      className="recipe"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <header className="recipe__header">
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </header>
      <section>
        <div className="recipe__section">
          <button
            onClick={() => setActiveTab("instructions")}
            className={
              activeTab === "instructions"
                ? "recipe__section--button active"
                : "recipe__section--button"
            }
          >
            Instructions
          </button>
          <button
            onClick={() => setActiveTab("ingredients")}
            className={
              activeTab === "ingredients"
                ? "recipe__section--button active"
                : "recipe__section--button"
            }
          >
            Ingredients
          </button>
        </div>
        {activeTab === "instructions" && (
          <div className="recipe__details">
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul className="recipe__ingredients">
            {details.extendedIngredients.map((item: ing) => (
              <li key={item.id}>{item.original}</li>
            ))}
          </ul>
        )}
      </section>
    </motion.div>
  );
};

export default Recipe;
