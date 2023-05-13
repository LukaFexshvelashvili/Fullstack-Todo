import axios from "axios";
import Categories from "../../../../arrays/Categories";
import "./CreateTask.css";
import { useContext, useState } from "react";
import { Loader } from "../../../../main/App";

export default function CreateTask() {
  const setLoader = useContext(Loader);

  const [alert, setAlert] = useState<{ show: number; success: number }>({
    show: 0,
    success: -1,
  });
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [year, setYear] = useState<number | undefined>(0);
  const [month, setMonth] = useState<number | undefined>(0);
  const [day, setDay] = useState<number | undefined>(0);

  const [category, setCategory] = useState<number>(1);

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return false;
  };
  const addTask = () => {
    setLoader(true);
    axios
      .post("http://localhost:3001/addTask", {
        title,
        description,
        year,
        month,
        day,
        category,
      })
      .then(() => {
        setLoader(false);
        setAlert({ show: 1, success: 1 });
        setTitle("");
        setDescription("");
        setYear(0);
        setMonth(0);
        setDay(0);
        setCategory(1);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
        setAlert({ show: 1, success: -1 });
      });
  };
  const closeAlert = () => {
    setAlert({ show: 0, success: -1 });
  };
  return (
    <div className="CreateBlock SBlock">
      <div className={`AlertBack${alert.show ? " SAlert" : ""}`}>
        <div className="TaskAlert">
          {alert.success == 1 ? (
            <>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.0001 91.6667C72.9167 91.6667 91.6668 72.9167 91.6668 50C91.6668 27.0833 72.9167 8.33331 50.0001 8.33331C27.0834 8.33331 8.33337 27.0833 8.33337 50C8.33337 72.9167 27.0834 91.6667 50.0001 91.6667Z"
                  stroke="#4DFF5E"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32.2916 50L44.0833 61.7917L67.7083 38.2083"
                  stroke="#4DFF5E"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>TASK ADDED</p>
              <button onClick={closeAlert}>THANK YOU</button>
            </>
          ) : alert.success == 0 ? (
            <>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 33.3333V54.1666M50 91.6667C72.9167 91.6667 91.6667 72.9167 91.6667 50C91.6667 27.0833 72.9167 8.33331 50 8.33331C27.0834 8.33331 8.33337 27.0833 8.33337 50C8.33337 72.9167 27.0834 91.6667 50 91.6667Z"
                  stroke="#FF2E63"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M50 67H50.0375"
                  stroke="#FF2E63"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>SERVER ERROR</p>
              <button className="erB" onClick={closeAlert}>
                OK
              </button>
            </>
          ) : undefined}
        </div>
      </div>
      <h2>
        <span>CREATE</span> TASK
      </h2>

      <form onSubmit={(e) => formSubmit(e)}>
        <div className="Inputer">
          <p className="InpHolder">Task Name</p>
          <input
            type="text "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="Inputer">
          <p className="InpHolder">Task Description</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="Inputer">
          <p className="InpHolder">Task Schedule</p>
          <div className="InpRow">
            <input
              type="number"
              value={year !== 0 ? year : ""}
              onChange={(e) => {
                e.target.valueAsNumber
                  ? setYear(e.target.valueAsNumber)
                  : setYear(0);
              }}
              className="MiniInp"
              placeholder="YEAR"
            />
            <input
              type="number"
              value={month !== 0 ? month : ""}
              onChange={(e) => {
                e.target.valueAsNumber
                  ? setMonth(e.target.valueAsNumber)
                  : setMonth(0);
              }}
              className="MiniInp"
              placeholder="MONTH"
            />
            <input
              type="number"
              value={day !== 0 ? day : ""}
              onChange={(e) => {
                e.target.valueAsNumber
                  ? setDay(e.target.valueAsNumber)
                  : setDay(0);
              }}
              className="MiniInp"
              placeholder="DAY"
            />
          </div>
        </div>
        <div className="CategoryChoose">
          {Categories.map((e: { id: number; color: string; title: string }) => (
            <div
              key={e.id}
              className={`CategoryBlock ${e.color}${
                category == e.id ? " CategoryActive" : ""
              }`}
              onClick={() => setCategory(e.id)}
            >
              {e.title}
            </div>
          ))}
        </div>
        <div className="AddBlock">
          <button className="AddTask" onClick={addTask}>
            ADD TASK
          </button>
        </div>
      </form>
    </div>
  );
}
