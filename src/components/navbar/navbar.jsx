import Logo from "../../assets/imdb.png";
import Menu from "../../assets/menu.png";
import Watchlist from "../../assets/watchlist.png";
import SignIn from "../../assets//signin.png";
import Lang from "../../assets/language.png";

import styled from "styled-components";

import { AiOutlineSearch } from "react-icons/ai";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Container>
        <LogoImage src={Logo} />
        <MenuImage src={Menu} />
        <SearchBar>
          <Dropdown>
            <DropdownText>
              All{" "}
              <span
                style={{
                  fontSize: "70%",
                  position: "relative",
                  bottom: "0.5px",
                }}
              >
                ▼
              </span>
            </DropdownText>
          </Dropdown>
          <Input />
          <AiOutlineSearch
            color="black"
            style={{ position: "relative", right: "20px", top: "4px" }}
          />
        </SearchBar>
        <WatchlistImage src={Watchlist} />
        <SignInImage src={SignIn} />
        <LangImage src={Lang} />
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 7%;
  padding-right: 7%;
  background-color: black;
  height: 45px;
`;

const LogoImage = styled.img`
  height: 30px;
`;

const MenuImage = styled.img`
  height: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const SearchBar = styled.div`
  display: flex;
  width: 60%;
`;

const Dropdown = styled.div`
  background-color: white;
  width: 7%;
  border-radius: 10%;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.9;
  }
  cursor: pointer;
`;

const DropdownText = styled.div`
  background-color: white;
  padding-left: 20%;
  padding-top: 15%;
  border-radius: 10%;
  font-size: 70%;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 93%;
  height: 20px;
  outline: none;
`;

const WatchlistImage = styled.img`
  height: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const SignInImage = styled.img`
  height: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const LangImage = styled.img`
  height: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
