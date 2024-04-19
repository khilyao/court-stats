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
  TotalResult,
} from "./GoalDetailsPage.styled";
import TaskList from "components/TaskList";

const GoalDetailsPage = () => {
  const navigate = useNavigate();
  const { type, goalId } = useParams();
  const taskId = Number(goalId) - 1;
  const directions = useSelector(directionsSelector);
  const goal = directions.find(({ direction }) => direction === type);
  const tasks = (goal ? goal.sections[taskId].subSections : []) as SubSection[];
  const total = tasks.reduce((acc, { value = 0 }) => (acc += value), 0);
  const labels = tasks.map(
    ({ subSectionName }) =>
      subSectionName.charAt(0).toUpperCase() + subSectionName.slice(1)
  );
  const valueOfTasks = tasks.map(({ value }) => value);
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
              navigate(-1);
            }}
          />
        </StyledBtn>
        {goal && <HeroHeading>{`${goalId} ${sectionName}`}</HeroHeading>}
      </Head>
      <TotalResult>{`Сумарний результат: ${total}`}</TotalResult>
      <StyledChart>
        <ChartWrapper>
          <Doughnut
            data={data}
            options={{
              plugins: {
                legend: {
                  align: "start",
                },
              },
            }}
          />
        </ChartWrapper>
      </StyledChart>
      <div style={{ marginTop: "50px" }}>
        <TaskList tasks={tasks} />
      </div>
    </Details>
  );
};

export default GoalDetailsPage;
