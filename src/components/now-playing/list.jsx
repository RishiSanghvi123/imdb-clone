import styled from "styled-components";

import { Link } from "react-router-dom";

const ListItem = ({ imageUrl, fullTitle }) => {
  return (
    <Container>
      <Link to={`/${fullTitle}`}>
        <ListImage src={imageUrl} />
      </Link>
      <Title>{fullTitle}</Title>
    </Container>
  );
};

const Container = styled.div`
  height: 23%;
  padding: 20px;
`;

const Title = styled.div`
  color: white;
`;

const ListImage = styled.img`
  width: 90%;
  height: 100%;
`;

export default ListItem;
