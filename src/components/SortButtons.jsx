import styled from "styled-components";

const SortButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 924px;
  opacity: 1;
  cursor: pointer;
  & > div {
    margin-left: 10px;
  }
`;

function SortButtons() {
  return (
    <SortButtonsWrapper>
      <div as="button"> Name </div>
      <div>Price</div>
    </SortButtonsWrapper>
  );
}

export default SortButtons;
