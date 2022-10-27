import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import SearchIcon from "./components/SearchIcon";
import NFTList from "./components/NFTList";
function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Header>
          <Logo>NFTSeas</Logo>
        </Header>
        <Main>
          <SearchBar>
            <IconWrapper>
              <SearchIcon />
            </IconWrapper>
            <Input />
          </SearchBar>
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
  padding: 50px 20px 0px 20px;
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
  border: none;
  width: auto;
  height: 90%;
  width: 100%;
  margin-left: 50px;
  font-weight: 400;
  font-size: 20px;
`;

const SearchBar = styled.div`
  margin-bottom: 50px;
  width: calc(100% - 40px);
  height: 50px;
  display: flex;
  align-items: center;
  border: 2px solid #e5e8eb;
  border-radius: 10px;
  position: relative;
`;

const IconWrapper = styled.div`
  left: 12px;
  position: absolute;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  max-width: 800px;
  padding: 0px 30px;
`;

export default App;
