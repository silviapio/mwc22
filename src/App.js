import {Routes, Route, Link} from "react-router-dom";
import Main from "./components/composed/Main";
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
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form-basic" element={<FormBasic />} />
          </Routes>
        </Main>
        <StyledFooter>Fixed Footer</StyledFooter>
      </OuterContainer>
    </>
  );
}

export default App;
