import Navbar from "./Navbar";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Favorites from "./Favorites";
import Upload from "./Upload";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Favorites">
              <Favorites />
            </Route>
            <Route exact path="/Upload">
              <Upload />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
