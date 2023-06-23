// @flow
import * as React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./hooks/useAppState";

type Props = {
  title: string;
  id: string;
};
export const Column = ({ id, title }: Props) => {
  const { getTasksByListId } = useAppState();
  const tasks = getTasksByListId(id);
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} title={task.text} />
      ))}
      <AddNewItem onAdd={console.log} textToggleButton={"+ Add new card"} />
    </ColumnContainer>
  );
};
