import { useNavigate, useParams } from "react-router-dom";
import TaskList from "components/TaskList";
import { SubSection } from "types/directionsTypes";
import { useSelector } from "react-redux";
import { directionsSelector } from "store/directions/directionSelectors";

const GoalDetailsPage = () => {
  const navigate = useNavigate();
  const { type, goalId } = useParams();
  const taskId = Number(goalId) - 1;
  const directions = useSelector(directionsSelector);
  const goal = directions.find(({ direction }) => direction === type);
  const tasks = (goal ? goal.sections[taskId].subSections : []) as SubSection[];

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
