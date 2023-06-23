import { AppState } from "../context/AppStateContext";
import { ActionType, AppAction } from "./actions";
import {
  findItemIndexById,
  insertItemAtIndex,
  moveItem,
  removeItemAtIndex,
} from "../utils/arrayUtils";

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

    case ActionType.MOVE_TASK: {
      const { lists } = state;
      const { fromId, toId, sourceColumnId, targetColumnId } = action.payload;
      const sourceListIndex = findItemIndexById(lists, sourceColumnId);
      const targetListIndex = findItemIndexById(lists, targetColumnId);

      const fromIndex = findItemIndexById(lists[sourceListIndex].tasks, fromId);
      const toIndex = toId
        ? findItemIndexById(lists[targetListIndex].tasks, toId)
        : 0;
      if (sourceListIndex === targetListIndex) {
        return {
          ...state,
          lists: lists.map((list) =>
            list.id === sourceColumnId
              ? { ...list, tasks: moveItem(list.tasks, fromIndex, toIndex) }
              : list
          ),
        };
      }

      const item = lists[sourceListIndex].tasks[fromIndex];
      const sourceTasks = removeItemAtIndex(
        lists[sourceListIndex].tasks,
        fromIndex
      );
      const targetTasks = insertItemAtIndex(
        lists[targetListIndex].tasks,
        item,
        toIndex
      );

      return {
        ...state,
        lists: lists.map((list) =>
          list.id === sourceColumnId
            ? { ...list, tasks: [...sourceTasks] }
            : list.id === targetColumnId
            ? { ...list, tasks: [...targetTasks] }
            : list
        ),
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
