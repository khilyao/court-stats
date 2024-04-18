import TaskItem from "components/TaskItem";
import { SubSection } from "types/directionsTypes";
import { List } from "./TaskList.styled";

type Props = { tasks: SubSection[] };

const TaskList = ({ tasks }: Props) => {
  console.log(tasks);

  return (
    <div>
      <List>
        {tasks.map(({ subSectionName, signature }, index) =>
          signature ? (
            <TaskItem key={index} signature={signature}>
              {subSectionName}
            </TaskItem>
          ) : (
            ""
          )
        )}
      </List>
    </div>
  );
};

export default TaskList;
