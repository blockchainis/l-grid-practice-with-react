import styled from "styled-components";

const NFTWrapper = styled.div`
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 15px 0px #00000040;
`;

const ColorBox = styled.div`
  height: 200px;
  background-color: #758ead;
`;

const NFTDetailWrapper = styled.div`
  height: 130px;
  background-color: white;
  padding: 10px;
`;

const TextsBox = styled.div`
  margin-bottom: 19px;
`;

const BoldText = styled.p`
  margin-bottom: 6px;
  font-weight: 800;
`;

function NFT() {
  return (
    <NFTWrapper>
      <ColorBox />
      <NFTDetailWrapper>
        <TextsBox>
          <BoldText>NFT</BoldText>
          <p>Dog 15</p>
        </TextsBox>
        <TextsBox>
          <BoldText>Price</BoldText>
          <p>0.101 Ether</p>
        </TextsBox>
      </NFTDetailWrapper>
    </NFTWrapper>
  );
}

export default NFT;
