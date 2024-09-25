// import logo from './logo.svg';
import "./App.css";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/icecream/IceCreamView";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
    </div>
  );
}

export default App;
