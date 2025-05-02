//?Routes => Renders a branch of <Routes> that best matches the current location.
//?Route => Renders a branch of Route that best matches the current location.
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail"; //? Import components
import Recipes from "./components/Recipes/Recipes"; //? Import components

import "./App.css";

function App() {
  return (
    //! <BrowserRouter> is a component for setting up routing in React.
    <BrowserRouter>
      <header>
        <nav>
          <Link className="nav_link" to="/">
            Home
          </Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
