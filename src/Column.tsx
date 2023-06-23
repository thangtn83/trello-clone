// @flow
import * as React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from "./Card";

type Props = {
  title: string;
};
export const Column = ({ title }: Props) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      <Card title={"first card"} />
      <Card title={"2nd card"} />
      <Card title={"3rst card"} />
    </ColumnContainer>
  );
};
