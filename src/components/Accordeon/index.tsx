import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Accordeon.module.scss";
import { ReactComponent as Arrow } from "assets/icons/arrow.svg";

type SubSection = {
  subSectionName: string;
  value?: number;
  valueDesc?: string;
};

type Section = {
  sectionName: string;
  subSections?: SubSection[]; // Make subSections optional
  result?: number; // Add result property
  subTitle?: string;
};

type Props = {
  sections?: Section[];
  children: string;
};

const Accordeon = ({ sections, children }: Props) => {
  const [isMoreGoodInfoClicked, setIsMoreGoodInfoClicked] = useState(false);

  return (
    <div className={s.goodInfo}>
      <div
        className={s.goodHeading}
        onClick={() => {
          setIsMoreGoodInfoClicked(!isMoreGoodInfoClicked);
        }}
      >
        <span className={s.infoBlock}>{children}</span>
        <Arrow
          style={{
            transform: isMoreGoodInfoClicked ? "rotate(90deg) " : "",
          }}
        />
      </div>
      <ul
        className={s.list}
        style={{
          transform: isMoreGoodInfoClicked ? "translateY(0)" : "",
          opacity: isMoreGoodInfoClicked ? "1" : "0",
        }}
      >
        {isMoreGoodInfoClicked && (
          <>
            {sections &&
              sections.map(({ sectionName }, index) => (
                <li className={s.item} key={index}>
                  <div className={s.infoFullDesc}>
                    <Link to="/">
                      <h2 className={s.infoTitle}>{`${
                        index + 1
                      } ${sectionName}`}</h2>
                    </Link>
                    {/* <p className={s.infoDescription}>{desc}</p> */}
                  </div>
                </li>
              ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default Accordeon;
