import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function Header() {
  return (
    <Link to="/">
      <h1>Movie App</h1>
    </Link>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    const jsonData = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setMovies(jsonData.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={loading ? "Loading" : <Home movies={movies} />}
          ></Route>
          <Route path="/movie/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
