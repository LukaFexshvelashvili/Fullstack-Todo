import TaskCards from "../../../../arrays/TaskCards";
import "./UpcomingTasks.css";

export default function UpcomingTasks() {
  return (
    <div className="SBlock UpcomingTasks">
      <h2>
        UPCOMING <span>TASKS</span>
      </h2>
      <div className="UTasksRow">
        {TaskCards.map((e, i: number) => (
          <div key={i} className={`UTask ${e.color + "Task"}`}>
            <div className="UTaskIcon"></div>
            <p>{e.tasks[0].title}</p>
            <p className="UTime">{e.tasks[0].time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
