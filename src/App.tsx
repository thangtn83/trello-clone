import "./App.css";
import { AppContainer } from "./styles";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./hooks/useAppState";

function App() {
  const { lists } = useAppState();
  return (
    <AppContainer>
      {lists?.map((list) => (
        <Column key={list.id} title={list.text} id={list.id} />
      ))}
      <AddNewItem onAdd={console.log} textToggleButton={"+ Add new list"} />
    </AppContainer>
  );
}

export default App;
