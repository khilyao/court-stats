import { Signature, Remark, Title } from "./TaskItem.styled";

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
      <Title>{capitalizeTitle(children)}</Title>
      {signature && <Signature>({signature})</Signature>}
    </Remark>
  );
};

export default TaskItem;
