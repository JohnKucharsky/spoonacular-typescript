import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { Category, Search } from "./components";
import { Pages } from "./pages";
import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="app__nav">
          <Link className="app__nav--knife" to={"/"}>
            <GiKnifeFork />
            <p>delicious</p>
          </Link>
        </nav>
        <Category />
        <Search />
        <Pages />
      </div>
    </BrowserRouter>
  );
};

export default App;
