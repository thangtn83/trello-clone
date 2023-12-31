import { DragItem } from "../types";
import { useAppState } from "./useAppState";
import { useDrag } from "react-dnd";
import { setDraggedItem } from "../store/actions";
import { useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => {
      dispatch(setDraggedItem(null));
    },
  });

  useEffect(() => {
    preview(getEmptyImage(), {
      captureDraggingState: true,
    });
  }, [preview]);
  return { drag };
};
