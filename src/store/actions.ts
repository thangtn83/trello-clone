import { List, Task } from "../types";

export enum ActionType {
  ADD_LIST = "ADD_LIST",
  ADD_TASK = "ADD_TASK",
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
export type AppAction = AddListAction | AddTaskAction;

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
