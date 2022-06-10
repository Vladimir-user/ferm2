import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import ComparisonCard from "/src/components/ui/comparison-card/comparison-card";
import Button from "/src/components/ui/button/button";
import { ComparisonWrapper, Comparisonlist, ComparisonItem } from "./styles";

function Comparison({ comparisons }) {
  return (
    <ComparisonWrapper>
      {comparisons?.length ? (
        <>
          <Title size={TitleSize.H2}>Почему фермерские продукты лучше?</Title>
          <Comparisonlist>
            {comparisons.map((comparison) => (
              <ComparisonItem key={comparison.id}>
                <ComparisonCard {...comparison} />
              </ComparisonItem>
            ))}
          </Comparisonlist>
          <Button width={260}>Купить</Button>
        </>
      ) : null}
    </ComparisonWrapper>
  );
}

export default Comparison;
