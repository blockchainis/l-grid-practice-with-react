import styled from "styled-components";
import NFT from "./NFT";

const NFTListWrapper = styled.div``;

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
