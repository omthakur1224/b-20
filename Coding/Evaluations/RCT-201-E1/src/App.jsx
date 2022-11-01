import { Routes ,Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return <div className="App">{/* code here */}
  <Routes>
    <Route to='/' element="<Home/>"  />
  </Routes>
  </div>;
}

export default App;
