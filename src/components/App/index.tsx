import { useEffect } from "react";
import "modern-normalize";
import { Routes, Route } from "react-router-dom";
import { Container } from "./App.styled";
import HomePage from "views/HomePage";
import "fonts/fonts.scss";
import "styles/common.scss";
import GoalDetailsPage from "views/GoalDetailsPage.tsx";
import { useDispatch } from "react-redux";
import { initRecords } from "store/slices/recordsSlice";
import { get, ref } from "firebase/database";
import { db } from "database/scripts/firebaseConfig";
import { Record } from "types/directionsTypes";
import { chooseDate } from "store/slices/currentDateSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const recordsRef = ref(db, "/");

    get(recordsRef).then((snapshot) => {
      if (snapshot.exists()) {
        const recordsArr: Record[] = snapshot.val();
        const lastRecordIndex = recordsArr.length - 1;

        dispatch(initRecords(recordsArr));
        dispatch(chooseDate(recordsArr[lastRecordIndex].date));
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
