import React, { useEffect, useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  StyledImage,
  StyledMessage,
  StyledButton,
} from "./Modal.styled";

interface ModalProps {
  tip: {
    number?: number;
    img?: string;
    message: string;
  };
  onNext: () => void;
  totalTips: number;
}

const Modal: React.FC<ModalProps> = ({ tip, onNext, totalTips }) => {
  const [allTipsViewed, setAllTipsViewed] = useState<boolean>(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onNext();

    if (tip.number === totalTips) {
      setAllTipsViewed(true);
      localStorage.setItem("isViewedTips", JSON.stringify(true));
    }
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleNextClick = () => {
    onNext();

    if (tip.number === totalTips) {
      setAllTipsViewed(true);
      localStorage.setItem("isViewedTips", JSON.stringify(true));
    }
  };

  useEffect(() => {
    const isViewedTips = localStorage.getItem("isViewedTips");

    if (isViewedTips) {
      setAllTipsViewed(true);
    }
  }, []);

  if (allTipsViewed) {
    return null;
  }

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent onClick={handleContentClick}>
        {tip.img && <StyledImage src={tip.img} alt="tip" width={100} />}
        <StyledMessage>{tip.message}</StyledMessage>
        <StyledButton onClick={handleNextClick}>Next</StyledButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
