import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { recipe } from "../../components/Veggie/Veggie";
import "./cuisine.scss";
type Props = {
  query: string;
};
const Cuisine: React.FC<Props> = ({ query }) => {
  let params = useParams<string>();
  const [cuisine, setCuisine] = useState([]);
  const getCuisine = async (name: any) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}${query}=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  useEffect(() => {
    getCuisine(params.type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.type]);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <div className="cuisine">
        {cuisine?.map((i: recipe) => (
          <Link key={i.id} to={"/recipe/" + i.id}>
            <img src={i.image} alt={i.title} />
            <p>{i.title}</p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Cuisine;
