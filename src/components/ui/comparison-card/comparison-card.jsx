import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import {
  Comparison,
  ComparisonCardHeader,
  ComparisonCardLabel,
  ComparisonCardText,
  ComparisonCardImage
} from "./styles";

function ComparisonCard({ image, label, title, text, isGood }) {
  return (
    <Comparison isGood={isGood}>
      <ComparisonCardHeader>
        <ComparisonCardImage
          src={image}
          width="56"
          height="56"
          alt="тематическое изображение"
        />
        <ComparisonCardLabel isGood={isGood}>{label}</ComparisonCardLabel>
        <Title size={TitleSize.B18}>{title}</Title>
      </ComparisonCardHeader>
      <ComparisonCardText>{text}</ComparisonCardText>
    </Comparison>
  );
}

export default ComparisonCard;
