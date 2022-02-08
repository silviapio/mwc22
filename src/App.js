import {Routes, Route, Link} from "react-router-dom";
import Home from "./components/screens/Home";
import FormBasic from "./components/screens/FormBasic";
import { OuterContainer, StyledFooter } from "./App.styles";
import { GlobalStyles } from "./general-styles/globalStyles";

import './App.css';

function App() {
  return (
    <>
    <GlobalStyles />
    <OuterContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-basic" element={<FormBasic />} />
      </Routes>
      <StyledFooter>Fixed Footer</StyledFooter>
    </OuterContainer>
    </>
  );
}

export default App;
