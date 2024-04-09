import { HeroTitle, Direction, HeroWrapper } from "./HeroHeading.styled";

type Props = {
  direction?: string;
  children: string;
};

const HeroHeading = ({ children, direction = "Стратегічна ціль" }: Props) => {
  return (
    <HeroWrapper>
      <Direction>{direction}</Direction>
      <HeroTitle>{children}</HeroTitle>
    </HeroWrapper>
  );
};

export default HeroHeading;
