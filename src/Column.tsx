// @flow
import * as React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./hooks/useAppState";
import { addTask } from "./store/actions";
import { nanoid } from "nanoid";

type Props = {
  title: string;
  id: string;
};
export const Column = ({ id, title }: Props) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  console.log("id");
  console.log("tasks", tasks);

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} title={task.text} />
      ))}
      <AddNewItem
        onAdd={(title) =>
          dispatch(
            addTask(id, {
              id: nanoid(),
              text: title,
            })
          )
        }
        textToggleButton={"+ Add new card"}
      />
    </ColumnContainer>
  );
};
