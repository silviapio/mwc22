import {Routes, Route, Link} from "react-router-dom";
import Home from "./components/screens/Home";
import FormBasic from "./components/screens/FormBasic";

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-basic" element={<FormBasic />} />
      </Routes>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
