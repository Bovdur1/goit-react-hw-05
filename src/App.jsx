import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/HomePage";
import Movies from "./pages/MoviesPage";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:detail" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
