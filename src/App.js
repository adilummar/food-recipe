import { BrowserRouter, Link } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import "./index.css";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={"/"}>
            <GiKnifeFork />
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  cursor: pointer;
`;
const Nav = styled.div`
  padding: 2rem 0rem;
  diplay: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
export default App;
