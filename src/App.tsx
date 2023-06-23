import "./App.css";
import { AppContainer } from "./styles";
import { Column } from "./Column";

function App() {
  return (
    <div>
      <AppContainer>
        <Column title={"First column"} />
        <Column title={"Second column"} />
        <Column title={"Thirst column"} />
      </AppContainer>
    </div>
  );
}

export default App;
