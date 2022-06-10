import styled from "styled-components";

export const Comparison = styled.div`
  padding: 20px;
  min-height: 160px;
  background-color: ${(props) => (props.isGood ? "#e1edce" : "#f8ddd7")};
`;

export const ComparisonCardHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap: 20px;
  padding-bottom: 20px;
`;

export const ComparisonCardLabel = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  width: 178px;
  text-align: center;
  margin: 0 0 6px 0;
  padding: 3px 0;
  background-color: ${(props) => (props.isGood ? "#88aa4d" : "#f75531")};
`;

export const ComparisonCardText = styled.p`
  margin: 0;
`;

export const ComparisonCardImage = styled.img`
  grid-row: span 2;
`;
