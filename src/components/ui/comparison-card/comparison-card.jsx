import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import {
  Comparison,
  ComparisonCardHeader,
  ComparisonCardLabel,
  ComparisonCardText,
  ComparisonCardImage
} from "./styles";

function ComparisonCard({ image, label, title, text, style }) {
  return (
    <Comparison>
      <div className={style}>
        <ComparisonCardHeader>
          <ComparisonCardImage
            src={image}
            width="56"
            height="56"
            alt="тематическое изображение"
          />
          <ComparisonCardLabel>
            <p className={`label-${style}`}>{label}</p>
          </ComparisonCardLabel>
          <Title size={TitleSize.B18}>{title}</Title>
        </ComparisonCardHeader>
        <ComparisonCardText>{text}</ComparisonCardText>
      </div>
    </Comparison>
  );
}

export default ComparisonCard;
