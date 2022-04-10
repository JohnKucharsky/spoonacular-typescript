import { motion } from "framer-motion";
import { Veggie } from "../../components";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <Veggie tag="&tags=vegetarian" width="20rem" title="Vegetarian Picks" />
      <Veggie tag="" width="15rem" title="Popular" />
    </motion.div>
  );
};

export default Home;
