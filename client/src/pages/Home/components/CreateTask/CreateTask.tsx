import "./CreateTask.css";
import { useState } from "react";
export default function CreateTask() {
  const [category, setCategory] = useState(0);
  const categories = [
    {
      color: "blue",
      title: "BOOKED",
    },
    {
      color: "yellow",
      title: "MARKED",
    },
    {
      color: "red",
      title: "DAILY",
    },
    {
      color: "purple",
      title: "OFFICE",
    },
  ];
  return (
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
        <div className="CategoryChoose">
          {categories.map(
            (
              e: {
                color: string;
                title: string;
              },
              i: number
            ) => (
              <div
                className={`CategoryBlock ${e.color}${
                  category == i ? " CategoryActive" : ""
                }`}
                onClick={() => setCategory(i)}
              >
                {e.title}
              </div>
            )
          )}
        </div>
        <div className="AddBlock">
          <button className="AddTask">ADD TASK</button>
        </div>
      </form>
    </div>
  );
}
