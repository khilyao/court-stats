import { useState } from "react";
import Arrow from "assets/icons/arrow.svg";
import s from "./goodInfo.module.scss";

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
  sections: Section[];
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
        <svg
          style={{
            transform: isMoreGoodInfoClicked ? "rotate(90deg) " : "",
          }}
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.85682 8.93057L15.999 8.93057"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.92789 1.85951L15.999 8.93057L8.92789 16.0016"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
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
            {sections.map(({ sectionName }, index) => (
              <li className={s.item} key={index}>
                <div className={s.infoFullDesc}>
                  <h2 className={s.infoTitle}>{sectionName}</h2>
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
