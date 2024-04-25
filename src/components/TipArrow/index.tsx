import {
  TipWrapper,
  Placeholder,
  ArrowLeft,
  ArrowRight,
} from "./TipArrow.styled";

type Props = {
  direction: "left" | "right";
  placeholder: string | undefined | boolean;
};

const TipArrow = ({ direction, placeholder }: Props) => {
  return (
    <TipWrapper
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1, y: "-50%" }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.9 }}
      direction={direction}
    >
      {direction === "left" ? (
        <ArrowLeft width={40} height={40} />
      ) : (
        <ArrowRight width={40} height={40} />
      )}
      <Placeholder>{placeholder}</Placeholder>
    </TipWrapper>
  );
};

export default TipArrow;
