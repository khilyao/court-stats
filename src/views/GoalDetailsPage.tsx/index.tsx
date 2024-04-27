import { useNavigate, useParams } from "react-router-dom";
import { SubSection } from "types/directionsTypes";
import { useSelector } from "react-redux";
import { directionsSelector } from "store/directions/directionSelectors";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import HeroHeading from "components/HeroHeading";

import {
  StyledHome,
  StyledBtn,
  ChartWrapper,
  StyledChart,
  Details,
  Head,
  TotalResult,
  StyledLegend,
  IconBox,
} from "./GoalDetailsPage.styled";
import TaskList from "components/TaskList";
import TipArrow from "components/TipArrow/index";

const GoalDetailsPage = () => {
  const navigate = useNavigate();
  const { type, goalId } = useParams();
  const taskId = Number(goalId) - 1;
  const directions = useSelector(directionsSelector);
  const goal = directions.find(({ direction }) => direction === type);
  const goalTotalSections = goal ? goal.sections.length : 0;
  const totalResult = goal && goal.sections[taskId].result;
  const tasks = (goal ? goal.sections[taskId].subSections : []) as SubSection[];
  const previousTaskSectionName =
    goalId && goal && taskId >= 1 && goal.sections[taskId - 1].sectionName;
  const nextTaskSectionName =
    goalId &&
    goal &&
    taskId < goalTotalSections - 1 &&
    goal.sections[taskId + 1].sectionName;

  const sliceString = (str: string) => {
    const splittedStr = str.split(" ");

    if (splittedStr.length <= 4) {
      return splittedStr.join(" ");
    }
    splittedStr.splice(4, 30);

    return splittedStr.join(" ") + "..";
  };

  const total =
    tasks && tasks.reduce((acc, { value = 0 }) => (acc += value), 0);
  const labels =
    tasks &&
    tasks.map(
      ({ subSectionName }) =>
        subSectionName.charAt(0).toUpperCase() + subSectionName.slice(1)
    );
  const valueOfTasks = tasks && tasks.map(({ value }) => value);
  const sectionName = goal ? goal.sections[taskId].sectionName : "";

  const plugin = {
    id: "increase-legend-spacing",

    beforeInit(chart: any) {
      const originalFit = chart.legend.fit;

      chart.legend.fit = function fit() {
        originalFit.bind(chart.legend)();
        this.height += 20;
      };
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Кількість",
        data: valueOfTasks,
        backgroundColor: [
          "#002949",
          "#004e9e",
          "#0086cd",
          "#38b6ab",
          "#ffd800",
          "#f0e8e3",
          "#006680",
          "#6c9bd2",
          "#0099cc",
          "#72d6cf",
        ],
        borderColor: [
          "#002949",
          "#004e9e",
          "#0086cd",
          "#38b6ab",
          "#ffd800",
          "#f0e8e3",
          "#006680",
          "#6c9bd2",
          "#0099cc",
          "#72d6cf",
        ],
        borderWidth: 1,
      },
    ],
  };

  ChartJS.register(ArcElement, Tooltip, Legend, plugin);

  return (
    <Details>
      <Head>
        <StyledBtn>
          <StyledHome
            onClick={() => {
              navigate("/");
            }}
          />
        </StyledBtn>
        {goal && <HeroHeading>{`${goalId} ${sectionName}`}</HeroHeading>}
      </Head>
      <TotalResult
        style={{
          position: !tasks ? "absolute" : "static",
          top: !tasks ? "270px" : "0px",
          left: !tasks ? "50%" : "0px",
          translate: !tasks ? "-50%" : "",
        }}
      >{`Загальна кількість: ${total || totalResult || 0}`}</TotalResult>

      <StyledLegend style={{ top: !tasks ? 50 : 0 }}>
        {Number(goalId) > 1 && (
          <IconBox to={`/goals/${type}/${goalId && Number(goalId) - 1}`}>
            <TipArrow
              placeholder={
                previousTaskSectionName && sliceString(previousTaskSectionName)
              }
              direction="left"
            />
          </IconBox>
        )}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <StyledChart>
            {tasks && (
              <ChartWrapper>
                <Doughnut
                  data={data}
                  options={{
                    plugins: {
                      legend: {
                        align: "start",
                      },
                    },
                    animation: {
                      animateScale: true,
                    },
                  }}
                />
              </ChartWrapper>
            )}
          </StyledChart>
        </motion.div>
        {Number(goalId) > 0 && taskId < goalTotalSections - 1 && (
          <IconBox to={`/goals/${type}/${goalId && Number(goalId) + 1}`}>
            <TipArrow
              placeholder={
                nextTaskSectionName && sliceString(nextTaskSectionName)
              }
              direction="right"
            />
          </IconBox>
        )}
      </StyledLegend>
      {tasks && (
        <div style={{ marginTop: "50px" }}>
          <TaskList tasks={tasks} />
        </div>
      )}
    </Details>
  );
};

export default GoalDetailsPage;
