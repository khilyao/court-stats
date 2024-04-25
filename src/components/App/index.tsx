import { useEffect } from "react";
import "modern-normalize";
import { Routes, Route } from "react-router-dom";
import { Container } from "./App.styled";
import HomePage from "views/HomePage";
import "fonts/fonts.scss";
import "styles/common.scss";
import GoalDetailsPage from "views/GoalDetailsPage.tsx";
import { useDispatch } from "react-redux";
import { initDirections } from "store/directions/directionSlice";
import { get, ref } from "firebase/database";
import { db } from "database/scripts/firebaseConfig";
import { Direction } from "types/directionsTypes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const directionsRef = ref(db, "directions");

    get(directionsRef).then((snapshot) => {
      if (snapshot.exists()) {
        const directionsArr: Direction[] = snapshot.val();
        dispatch(initDirections(directionsArr));
      } else {
        console.log("No data available");
      }
    });
  }, [dispatch]);

  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/goals/:type/:goalId" element={<GoalDetailsPage />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
