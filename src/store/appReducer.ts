import { AppState } from "../context/AppStateContext";
import { ActionType, AppAction } from "./actions";
import { findItemIndexById, moveItem } from "../utils/arrayUtils";

export const appReducer = (
  state: AppState,
  action: AppAction
): AppState | void => {
  switch (action.type) {
    case ActionType.ADD_TASK: {
      const { listId, task } = action.payload;
      return {
        ...state,
        lists: state.lists.map((list) =>
          list.id === listId ? { ...list, tasks: [...list.tasks, task] } : list
        ),
      };
    }
    case ActionType.ADD_LIST: {
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    }

    case ActionType.MOVE_LIST: {
      const { fromId, toId } = action.payload;
      const { lists } = state;
      const dragIndex = findItemIndexById(lists, fromId);
      const hoverIndex = findItemIndexById(lists, toId);
      return {
        ...state,
        lists: [...moveItem(lists, dragIndex, hoverIndex)],
      };
    }
    case ActionType.SET_DRAGGED_ITEM: {
      return {
        ...state,
        draggedItem: action.payload.draggedItem,
      };
    }
  }
};
