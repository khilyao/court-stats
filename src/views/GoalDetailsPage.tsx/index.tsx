import { useNavigate, useParams } from "react-router-dom";
import TaskList from "components/TaskList";
import db from "tempDB.json";
import { Task } from "types/task";

const GoalDetailsPage = () => {
  const navigate = useNavigate();
  const { type, goalId } = useParams();
  const taskId = Number(goalId) - 1;
  const goal = db.directions.find(({ direction }) => direction === type);

  const tasks = (goal ? goal.sections[taskId].subSections : []) as Task[];

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <TaskList tasks={tasks} />
    </>
  );
};

export default GoalDetailsPage;
