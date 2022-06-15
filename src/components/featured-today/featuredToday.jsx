import styled from "styled-components";
import axios from "axios";

import { useEffect, useState } from "react";
import FeatureTodayItem from "./featured-today";

const FeaturedToday = () => {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetch() {
      await axios
        .get("https://imdb-api.com/en/API/MostPopularMovies/k_7h2yfpz1")
        .then((res) => {
          setData(res.data.items);
          setDataLength(res.data.items.length);
        });
    }
    fetch();
  }, []);

  const handleIncrement = () => {
    index === dataLength - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const handleDecrement = () => {
    index === 0 ? setIndex(dataLength - 1) : setIndex(index - 1);
  };

  return (
    <SC>
      <CSDiv>
        <H1>Featured Today</H1>
      </CSDiv>
      <Container>
        <Highlight>
          {dataLength && <FeatureTodayItem data={data} index={index} />}
          <ButtonContainer>
            <button onClick={handleDecrement}>{"<"}</button>
            <button onClick={handleIncrement}>{">"}</button>
          </ButtonContainer>
        </Highlight>
      </Container>
    </SC>
  );
};

const SC = styled.div`
  display: grid;
  background-color: black;
`;

const CSDiv = styled.div`
  height: 50px;
  padding-left: 10%;
`;

const H1 = styled.h2`
  color: gold;
`;

const Container = styled.div`
  background-color: black;
  height: 60vh;
  /* padding-top: 0px; */
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 0px;
  display: flex;
`;

const Highlight = styled.div`
  background-color: black;
  width: 70%;
`;

const ButtonContainer = styled.div`
  padding-top: 40px;
`;

export default FeaturedTodayn;
