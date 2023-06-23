// @flow
import * as React from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import { Card } from "./Card";
import { AddNewItem } from "../AddNewItem";
import { useAppState } from "../hooks/useAppState";
import { addTask, moveList } from "../store/actions";
import { nanoid } from "nanoid";
import { useRef } from "react";
import { useItemDrag } from "../hooks/useItemDrag";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { isHidden } from "../utils/isHidden";

type Props = {
  title: string;
  id: string;
  isPreview?: boolean;
};
export const Column = ({ id, title, isPreview }: Props) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement | null>(null);
  const { drag } = useItemDrag({ type: "COLUMN", text: title, id });
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover: throttle(200, () => {
      if (!draggedItem) return;
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) return;
      }
      dispatch(moveList(draggedItem.id, id));
    }),
  });

  drag(drop(ref));

  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
      isPreview={isPreview}
    >
      <ColumnTitle>{title}</ColumnTitle>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <Card key={task.id} title={task.text} columnId={id} id={task.id} />
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
