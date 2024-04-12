import { Link, useParams } from "react-router-dom";
import TaskItem from "components/TaskItem";
import { Task } from "types/task";

type Props = { tasks: Task[] };

const TaskList = ({ tasks }: Props) => {
  const { goalId, type } = useParams();

  return (
    <div>
      <ul>
        {tasks.map(({ subSectionName }, index) => (
          <Link
            key={index}
            to={`/goals/${type}/${goalId}/task-details/${index + 1}`}
          >
            <TaskItem>{`${goalId}.${index + 1} ${subSectionName}`}</TaskItem>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
