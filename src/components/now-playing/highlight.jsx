import styled from "styled-components";

import { Link } from "react-router-dom";

const HighlightItem = ({ imageUrl, fullTitle }) => {
  return (
    <Container>
      <Link to={`/${fullTitle}`}>
        <HighlightImage src={imageUrl} />
      </Link>
      <Title>{fullTitle}</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 70%;
  padding: 20px;
`;

const Title = styled.h1`
  color: white;
  position: relative;
  left: 23%;
`;

const HighlightImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default HighlightItem;
