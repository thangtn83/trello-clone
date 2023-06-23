import { DragItem } from "../types";

export function isHidden(
  dragItem: DragItem | null,
  itemType: string,
  id: string,
  preview?: boolean
) {
  return Boolean(
    !preview &&
      dragItem !== null &&
      dragItem.type === itemType &&
      dragItem.id === id
  );
}
