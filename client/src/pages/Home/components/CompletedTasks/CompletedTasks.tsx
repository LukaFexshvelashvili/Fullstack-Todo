import { useEffect, useState } from "react";
import "./CompletedTasks.css";
import TaskCards from "../../../../arrays/TaskCards";
import { ITaskCard } from "../../Home";

interface ICount {
  color: string;
  count: number;
}
[];

export default function CompletedTasks() {
  const [completedCounts, setCompletedCounts] = useState<ICount[]>([]);
  const [anim, setAnim] = useState<boolean>(false);
  let completedCountsJoin: ICount[] = [];
  useEffect(() => {
    TaskCards.map((e: ITaskCard) => {
      if (completedCountsJoin.length <= 3) {
        completedCountsJoin.push({
          color: e.color,
          count: e.tasks.length,
        });
      }
    });
    setCompletedCounts(completedCountsJoin);
    const getAnims = setTimeout(() => {
      setAnim(true);
      clearTimeout(getAnims);
    }, 0);
    return () => clearTimeout(getAnims);
  }, []);
  const GetAnalytics = () => {
    let maxCount = 0;
    if (completedCounts.length > 1) {
      for (let i = 0; i < completedCounts.length; i++) {
        if (completedCounts[i].count > maxCount) {
          maxCount = completedCounts[i].count + 3;
        }
      }

      return completedCounts.map((e: ICount, i: number) => (
        <div key={i} className={`CompletedColumn ${e.color + "Count"}`}>
          <div className="CompletedProgressBar">
            <div
              className="CompletedProgress"
              style={{
                height: anim
                  ? ((100 / maxCount) * e.count).toFixed(2) + "%"
                  : 0,
              }}
            ></div>
          </div>
          <div className="CompletedCount">{e.count}</div>
        </div>
      ));
    }
  };
  return (
    <div className="SBlock CompletedTasks">
      <h2>
        <span>COMPLETED</span> TASKS
      </h2>
      <div className="CompletedRow">{GetAnalytics()}</div>
    </div>
  );
}
