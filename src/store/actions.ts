import { DragItem, List, Task } from "../types";

export enum ActionType {
  ADD_LIST = "ADD_LIST",
  ADD_TASK = "ADD_TASK",
  MOVE_LIST = "MOVE_LIST",
  SET_DRAGGED_ITEM = "SET_DRAGGED_ITEM",
}
interface AddListAction {
  type: ActionType.ADD_LIST;
  payload: List;
}

interface AddTaskAction {
  type: ActionType.ADD_TASK;
  payload: {
    task: Task;
    listId: string;
  };
}

interface MoveListAction {
  type: ActionType.MOVE_LIST;
  payload: {
    fromId: string;
    toId: string;
  };
}

interface SetDraggedItemAction {
  type: ActionType.SET_DRAGGED_ITEM;
  payload: {
    draggedItem: DragItem | null;
  };
}

export type AppAction =
  | AddListAction
  | AddTaskAction
  | MoveListAction
  | SetDraggedItemAction;

export const addTask = (listId: string, task: Task): AppAction => {
  return {
    type: ActionType.ADD_TASK,
    payload: {
      task,
      listId,
    },
  };
};

export const addList = (list: List): AppAction => ({
  type: ActionType.ADD_LIST,
  payload: list,
});

export const moveList = (from: string, to: string): AppAction => ({
  type: ActionType.MOVE_LIST,
  payload: {
    fromId: from,
    toId: to,
  },
});

export const setDraggedItem = (draggedItem: DragItem | null): AppAction => ({
  type: ActionType.SET_DRAGGED_ITEM,
  payload: {
    draggedItem,
  },
});
