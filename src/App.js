import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";
import Banner from "./Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/home"
            element={[<Header />, <Banner />, <Home />]}
          ></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
