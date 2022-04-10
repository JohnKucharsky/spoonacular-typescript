import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./veggie.scss";

// types
type Props = {
  tag: string;
  width: string;
  title: string;
};
export type recipe = {
  title: string;
  image: string;
  id: number;
};
// types

const Veggie: React.FC<Props> = ({ tag, width, title }) => {
  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9${tag}`
    );
    const data = await api.json();
    setVeggie(data.recipes);
  };
  useEffect(() => {
    getVeggie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="veggie">
      <h2 className="veggie__header">{title}</h2>
      <Splide
        options={{
          fixedWidth: width,
          type: "loop",
          arrows: true,
          gap: "1rem",
          pagination: false,
        }}
      >
        {veggie?.map((i: recipe) => (
          <SplideSlide key={i.title}>
            <Link to={"/recipe/" + i.id}>
              <div className="veggie__card">
                <img
                  className="veggie__card--img"
                  src={i.image}
                  alt={i.title}
                />
                <p>{i.title}</p>
                <div className="veggie__card--overlay" />
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Veggie;
