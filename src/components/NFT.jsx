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

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextsBox = styled.div`
  width: 90%;
  margin-top: 20px;
`;

const BoldText = styled.p`
  font-weight: 700;
  margin-bottom: 7.5px;
`;

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
