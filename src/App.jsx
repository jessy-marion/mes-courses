import "./App.css";
import Paper from "./Components/Paper.jsx";
import Window from "./Components/Window.jsx";

function App() {
  return (
    <div className={"flex p-3 lg:p-40 justify-center items-center flex-col"}>
      <Window />
      <Paper />
    </div>
  );
}

export default App;
