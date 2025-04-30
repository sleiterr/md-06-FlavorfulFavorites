//?Routes => Renders a branch of <Routes> that best matches the current location.
//?Route => Renders a branch of Route that best matches the current location.
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail"; //? Import components
import Recipes from "./components/Recipes"; //? Import components

import "./App.css";

function App() {
  return (
    //! <BrowserRouter> is a component for setting up routing in React.
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <div>
          <Routes>
            //? path parses a string URL path into its separate pathname,search,andhash components.
            <Route path="/" element={<Recipes />} />
            <Route path="/recipe:id" element={<RecipeDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
