import { Signature, Remark } from "./TaskItem.styled";

type Props = {
  signature?: string;
  children: string;
};

const TaskItem = ({ children, signature }: Props) => {
  const capitalizeTitle = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Remark>
      <h2>{capitalizeTitle(children)}</h2>
      {signature && <Signature>({signature})</Signature>}
    </Remark>
  );
};

export default TaskItem;
