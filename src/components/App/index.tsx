import "modern-normalize";
import { Routes, Route } from "react-router-dom";
import { Container } from "./App.styled";
import HomePage from "views/HomePage";
import "fonts/fonts.scss";
import "styles/common.scss";
import TaskDetailsPage from "views/TaskDetailsPage.tsx";
import GoalDetailsPage from "views/GoalDetailsPage.tsx";

const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/goals/:type/:goalId" element={<GoalDetailsPage />} />
          <Route
            path="/goals/:type/:goalId/task-details/:taskId"
            element={<TaskDetailsPage />}
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
