import { DragItem, List, Task } from "../types";
import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { AppAction } from "../store/actions";
import { appReducer } from "../store/appReducer";

export type AppState = {
  lists: List[];
  draggedItem: DragItem | null;
};

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
  draggedItem: null,
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId: (id: string) => Task[];
  dispatch: Dispatch<AppAction>;
  draggedItem: DragItem | null;
};

export const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<AppState>(appReducer, appData);
  const { lists, draggedItem } = state;
  const getTasksByListId = (id) => {
    return lists.find((list) => list.id === id).tasks || [];
  };

  return (
    <AppStateContext.Provider
      value={{ lists, getTasksByListId, dispatch, draggedItem }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
