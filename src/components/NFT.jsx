import styled from "styled-components";

const NFTWrapper = styled.div`
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 15px 0px #00000040;
`;
const NFTImage = styled.div`
  height: 297px;
`;
const NFTDetail = styled.div`
  height: 150px;
  background-color: white;
  padding: 10px;
`;
const NFTName = styled.div`
  margin-bottom: 19px;
  & > p:first-child {
    margin-bottom: 6px;
    font-weight: 800;
  }

  & > p:last-child {
    margin-bottom: 6px;
  }
`;

const NFTPrice = styled.div`
  & > p:first-child {
    margin-bottom: 6px;
    font-weight: 800;
  }
`;

function NFT() {
  return (
    <NFTWrapper>
      <NFTImage
        className="nft__color"
        style={{ backgroundColor: "#758ead" }}
      ></NFTImage>
      <NFTDetail>
        <NFTName>
          <p>NFT</p>
          <p>Dog 15</p>
        </NFTName>
        <NFTPrice>
          <p>Price</p>
          <p>0.101 Either</p>
        </NFTPrice>
      </NFTDetail>
    </NFTWrapper>
  );
}

export default NFT;
