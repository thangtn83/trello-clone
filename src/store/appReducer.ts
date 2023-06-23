import { AppState } from "../context/AppStateContext";
import { ActionType, AppAction } from "./actions";

export const appReducer = (
  state: AppState,
  action: AppAction
): AppState | void => {
  switch (action.type) {
    case ActionType.ADD_TASK: {
      const { listId, task } = action.payload;
      console.log(
        "state",
        state.lists.map((list) =>
          list.id === listId ? { ...list, tasks: [...list.tasks, task] } : list
        )
      );
      return {
        lists: state.lists.map((list) =>
          list.id === listId ? { ...list, tasks: [...list.tasks, task] } : list
        ),
      };
    }
    case ActionType.ADD_LIST: {
      return {
        lists: [...state.lists, action.payload],
      };
    }
  }
};
