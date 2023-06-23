import "./App.css";
import {
  AppContainer,
  CardContainer,
  ColumnContainer,
  ColumnTitle,
} from "./styles";

function App() {
  return (
    <div>
      <AppContainer>
        <ColumnContainer>
          <ColumnTitle>Column Title</ColumnTitle>
          <CardContainer>
            <div>Content card</div>
          </CardContainer>
        </ColumnContainer>
        <ColumnContainer>
          <ColumnTitle>Column Title</ColumnTitle>
          <CardContainer>
            <div>Content card</div>
          </CardContainer>
        </ColumnContainer>
      </AppContainer>
    </div>
  );
}

export default App;
