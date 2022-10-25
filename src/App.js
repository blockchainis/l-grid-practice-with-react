import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import SearchIcon from "./components/SearchIcon";
import NFTList from "./components/NFTList";
import SortButtons from "./components/SortButtons";
function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Header>
          <Logo>NFTSeas</Logo>
          <SearchBar>
            <Icon>
              <SearchIcon />
            </Icon>
            <Input />
          </SearchBar>
        </Header>
        <Main>
          <SortButtons />
          <NFTList />
        </Main>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  flex-direction: column;
  padding-top: 50px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 96px;
  font-weight: 800;
  line-height: 116px;
`;

const Input = styled.input`
  margin-top: 4px;
  width: auto;
  height: 27px;
  border: none;
  margin-left: 27px;
  font-weight: 400;
  font-size: 20px;
`;
const SearchBar = styled.div`
  margin-top: 10px;
  width: 600px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 2px solid #e5e8eb;
  border-radius: 10px;
  position: relative;
`;

const Icon = styled.div`
  margin-left: 12px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 152px;
`;

export default App;
