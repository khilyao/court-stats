type Props = {
  children: string;
};

const TaskItem = ({ children }: Props) => {
  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
};

export default TaskItem;
