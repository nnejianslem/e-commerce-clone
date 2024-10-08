import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/checkout" element={ <Header/>}/>
        </Routes>
        <Routes>
          <Route path="/checkout" element={ <Checkout/>}/>
        </Routes>

        <Routes>
          <Route path="/" element={ <Header/>}/>
        </Routes>
        <Routes>
          <Route path="/" element={ <Home/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
