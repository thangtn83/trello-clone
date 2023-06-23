// @flow
import * as React from "react";
import { CardContainer } from "../styles";
import { useAppState } from "../hooks/useAppState";
import { useRef } from "react";
import { useItemDrag } from "../hooks/useItemDrag";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { moveTask, setDraggedItem } from "../store/actions";
import { DragItem } from "../types";

type Props = {
  title: string;
  columnId: string;
  id: string;
  isPreview?: boolean;
};
export const Card = ({ title, columnId, id, isPreview }: Props) => {
  console.log("id", id);
  console.log("idCol", columnId);
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement | null>(null);
  const { drag } = useItemDrag({ type: "CARD", id, text: title, columnId });
  const [, drop] = useDrop({
    accept: "CARD",
    hover: throttle(200, () => {
      if (!draggedItem) return;
      if (draggedItem.type === "CARD") {
        if (draggedItem.id === id) return;
        dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId));
        dispatch(setDraggedItem({ ...draggedItem, columnId } as DragItem));
      }
    }),
  });
  drag(drop(ref));
  return (
    <CardContainer ref={ref} isPreview={isPreview}>
      {title}
    </CardContainer>
  );
};
