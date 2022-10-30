import styled from "styled-components";
import NFT from "./NFT";

const NFTListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  margin-bottom: 20px;
`;

function NFTList() {
  return (
    <NFTListWrapper>
      <NFT />
      <NFT />
      <NFT />
      <NFT />
      <NFT />
    </NFTListWrapper>
  );
}

export default NFTList;
