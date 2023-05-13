import "./TaskCard.css";

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

export default function TaskCard({
  color,
  title,
  taskCount,
  tasks,
}: ITaskCard) {
  return (
    <div className={`TaskCard ${color}`}>
      <div className="TaskCardStarter">
        <div className="TaskCount">{taskCount}</div>
        <p>{title} Tasks</p>
      </div>
      <div className="Line"></div>
      <div className="MiniTaskRow">
        {tasks.map(
          (
            e: {
              time: string;
              title: string;
              description: string;
            },
            i: number
          ) =>
            i < 3 ? (
              <div key={i} className="MiniTask">
                <div className="MTime">{e.time}</div>
                <div className="MTitle">{e.title}</div>
                <div className="MDescription">{e.description}</div>
              </div>
            ) : undefined
        )}
      </div>
      <button className="MiniTaskButton">SEE ALL</button>
    </div>
  );
}
