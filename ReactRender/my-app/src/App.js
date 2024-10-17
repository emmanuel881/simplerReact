import "./App.css";
import ChildOne from "./components/optimization/ChildOne";
import ParentOne from "./components/optimization/ParentOne";
// import UseReducer from "./components/UseReducer/UseReducer";
//import UseState from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      <ParentOne>
        <ChildOne />
      </ParentOne>
    </div>
  );
}

export default App;
