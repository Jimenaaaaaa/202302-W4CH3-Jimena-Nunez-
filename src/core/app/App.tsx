import { MOCK } from "../../features/character/mocks/character.mock";
import { Character } from "../../features/character/page/character";
import { Header } from "../header/header";
import "./App.css";


function App() {
  return (
    <>
      <Header></Header>
      <main>
          <Character></Character>
      </main>
    </>
  );
}

export default App;
