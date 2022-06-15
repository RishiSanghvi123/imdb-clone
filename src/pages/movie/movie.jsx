import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const Movie = () => {
  let { movie } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      await axios
        .get(`https://imdb-api.com/en/API/SearchMovie/k_7h2yfpz1/${movie}`)
        .then((res) => {
          setData(res.results);
        });
      console.log(data);
    }
    fetch();
  }, [data, movie]);
  return <div>{movie}</div>;
};

export default Movie;
