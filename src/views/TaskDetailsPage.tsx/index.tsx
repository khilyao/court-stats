import { useNavigate } from "react-router-dom";
// import TaskList from "components/TaskList";
// import db from "tempDB.json";

const TaskDetailsPage = () => {
  // const { type, goalId, taskId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </>
  );
};

export default TaskDetailsPage;
