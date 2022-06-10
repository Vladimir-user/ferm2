import styled from "styled-components";

export const ComparisonWrapper = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 0;
  padding: 100px 0 90px 0;
`;

export const Comparisonlist = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 540px);
  gap: 20px 20px;
  padding: 64px 0;
  margin: 0;
`;

export const ComparisonItem = styled.li`
  list-style: none;
`;
