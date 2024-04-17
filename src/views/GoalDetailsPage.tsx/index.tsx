import { useNavigate, useParams } from "react-router-dom";
// import TaskList from "components/TaskList";
import { SubSection } from "types/directionsTypes";
import { useSelector } from "react-redux";
import { directionsSelector } from "store/directions/directionSelectors";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import HeroHeading from "components/HeroHeading";
import {
  StyledHome,
  StyledBtn,
  ChartWrapper,
  StyledChart,
  Details,
  Head,
} from "./GoalDetailsPage.styled";

const GoalDetailsPage = () => {
  const navigate = useNavigate();
  const { type, goalId } = useParams();
  const taskId = Number(goalId) - 1;
  const directions = useSelector(directionsSelector);
  const goal = directions.find(({ direction }) => direction === type);
  const tasks = (goal ? goal.sections[taskId].subSections : []) as SubSection[];
  const labels = tasks.map(
    ({ subSectionName }) =>
      subSectionName.charAt(0).toUpperCase() + subSectionName.slice(1)
  );
  const valueOfTasks = tasks.map(({ value }) => value);
  const sectionName = goal ? goal.sections[taskId].sectionName : "";

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

  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <Details>
      <Head>
        <StyledBtn>
          <StyledHome
            onClick={() => {
              navigate(-1);
            }}
          />
        </StyledBtn>
        {goal && <HeroHeading>{`${goalId} ${sectionName}`}</HeroHeading>}
      </Head>
      <StyledChart>
        <ChartWrapper>
          <Doughnut data={data} />
        </ChartWrapper>
      </StyledChart>
      {/* <TaskList tasks={tasks} /> */}
    </Details>
  );
};

export default GoalDetailsPage;
