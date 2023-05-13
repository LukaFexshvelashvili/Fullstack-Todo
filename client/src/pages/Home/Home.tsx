import "./Home.css";
import TaskCards from "../../arrays/TaskCards";
import TaskCard from "../../components/TaskCard/TaskCard";
import CreateTask from "./components/CreateTask/CreateTask";
import UpcomingTasks from "./components/UpcomingTasks/UpcomingTasks";
import CompletedTasks from "./components/CompletedTasks/CompletedTasks";
import Bookmarks from "./components/Bookmarks/Bookmarks";

export interface ITaskCard {
  color: string;
  title: string;
  taskCount: number;
  tasks: {
    time: string;
    title: string;
    description: string;
  }[];
}

export default function Home() {
  return (
    <div className="Home">
      <div className="RRow">
        <div className="RCol g-7">
          <div className="TaskRow">
            {TaskCards.map((e: ITaskCard, i: number) => (
              <TaskCard
                key={i}
                color={e.color}
                title={e.title}
                taskCount={e.taskCount}
                tasks={e.tasks}
              />
            ))}
          </div>
          <CreateTask />
        </div>
        <div className="RCol RCol2 g-3">
          <UpcomingTasks />
          <CompletedTasks />
        </div>
      </div>
      <Bookmarks />
    </div>
  );
}
