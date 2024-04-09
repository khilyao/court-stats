import "modern-normalize";
import { Routes, Route } from "react-router-dom";
import db from "tempDB.json";
import { Container } from "./App.styled";
import HomePage from "views/HomePage";
import "fonts/fonts.scss";
import "styles/common.scss";

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
