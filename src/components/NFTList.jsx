import "./NFT.css";
import styled from "styled-components";
import NFT from "./NFT";

const NFTListWrapper = styled.div`
  margin-top: 21px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 20px;
  width: 100%;
`;

function NFTList() {
  return (
    <NFTListWrapper>
      <NFT />
      <NFT />
      <NFT />
    </NFTListWrapper>
  );
}

export default NFTList;
