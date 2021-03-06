import {Routes, Route} from "react-router-dom";
import Main from "./components/composed/Main";
import Home from "./components/screens/Home";
import Form from "./components/screens/Form";
import Profile from "./components/screens/Profile";
import { OuterContainer } from "./App.styles";
import { GlobalStyles } from "./general-styles/globalStyles";

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
      </OuterContainer>
    </>
  );
}

export default App;
