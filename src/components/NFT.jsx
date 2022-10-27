import styled from "styled-components";

const NFTWrapper = styled.div`
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 15px 0px #00000040;
`;

const ColorBox = styled.div``;

const DetailBox = styled.div``;

const TextsBox = styled.div``;

const BoldText = styled.p``;

function NFT() {
  return (
    <NFTWrapper>
      <ColorBox />
      <DetailBox>
        <TextsBox>
          <BoldText>NFT</BoldText>
          <p>Dog 15</p>
        </TextsBox>
        <TextsBox>
          <BoldText>Price</BoldText>
          <p>0.101 Ether</p>
        </TextsBox>
      </DetailBox>
    </NFTWrapper>
  );
}

export default NFT;
