import "./Home.css";
import TaskCards from "../../arrays/TaskCards";
import TaskCard from "../../components/TaskCard/TaskCard";

interface ITaskCard {
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
        <div className="CreateBlock SBlock">
          <h2>
            CREATE <span>TASK</span>
          </h2>

          <form>
            <div className="Inputer">
              <p className="InpHolder">Task Name</p>
              <input type="text" />
            </div>
            <div className="Inputer">
              <p className="InpHolder">Task Description</p>
              <textarea></textarea>
            </div>
            <div className="Inputer">
              <p className="InpHolder">Task Schedule</p>
              <div className="InpRow">
                <input type="number" className="MiniInp" placeholder="YEAR" />
                <input type="number" className="MiniInp" placeholder="MONTH" />
                <input type="number" className="MiniInp" placeholder="DAY" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
