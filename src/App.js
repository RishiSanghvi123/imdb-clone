import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Movie from "./pages/movie/movie";

function App() {
  // useEffect(() => {
  //   checkUserSession();
  // }, [checkUserSession]);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path=":movie" element={<Movie />} />
      </Route>
    </Routes>
  );
}

export default App;
