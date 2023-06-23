// @flow
import * as React from "react";
import { CardContainer } from "./styles";

type Props = {
  priority?: string;
  title: string;
  description?: string;
};
export const Card = ({ title }: Props) => {
  return <CardContainer>{title}</CardContainer>;
};
