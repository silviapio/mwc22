import {Routes, Route} from "react-router-dom";
import Main from "./components/composed/Main";
import Home from "./components/screens/Home";
import Form from "./components/screens/Form";
import Profile from "./components/screens/Profile";
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
            <Route path="/form" element={<Form />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Main>
        <StyledFooter>Fixed Footer</StyledFooter>
      </OuterContainer>
    </>
  );
}

export default App;
