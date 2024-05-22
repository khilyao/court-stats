import { useNavigate } from "react-router-dom";

const TaskDetailsPage = () => {
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
