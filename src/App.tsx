import "./App.css";
import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./hooks/useAppState";
import { nanoid } from "nanoid";
import { List } from "./types";
import { addList } from "./store/actions";
import { CustomDragLayer } from "./components/CustomDragLayer";

function App() {
  const { lists, dispatch } = useAppState();

  const handleAddNewColumn = (listTitle: string) => {
    const newList: List = {
      id: nanoid(),
      tasks: [],
      text: listTitle,
    };
    dispatch(addList(newList));
  };

  return (
    <AppContainer>
      <CustomDragLayer />
      {lists?.map((list) => (
        <Column key={list.id} title={list.text} id={list.id} />
      ))}
      <AddNewItem
        onAdd={(listTitle) => handleAddNewColumn(listTitle)}
        textToggleButton={"+ Add new list"}
      />
    </AppContainer>
  );
}

export default App;
