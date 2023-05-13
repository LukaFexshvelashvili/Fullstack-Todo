import "./Bookmarks.css";

export default function Bookmarks() {
  const Bookmarks = [
    {
      color: "#CC3CFF",
      title: "WORKOUT",
      tasks: "6 DAILY TASKS",
      status: 3,
    },
    {
      color: "#FF7A00",
      title: "HOMEWORK",
      tasks: "4 DAILY TASKS",
      status: 2,
    },
    {
      color: "#FF1FA5",
      title: "EXAMS",
      tasks: "5 WEEKLY TASKS",
      status: 2,
    },
    {
      color: "#00A843",
      title: "READING BOOKS",
      tasks: "3 MONTHLY TASKS",
      status: 1,
    },
    {
      color: "#189EFF",
      title: "GOING POOL",
      tasks: "3 WEEKLY TASKS",
      status: 2,
    },
    {
      color: "#FF5D29",
      title: "JOB",
      tasks: "4 DAILY TASKS",
      status: 3,
    },
  ];
  return (
    <div className="SBlock Bookmarks">
      <h2>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.25 9.05C11.0257 9.70002 12.9743 9.70002 14.75 9.05"
            stroke="#FF2E63"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z"
            stroke="#FF2E63"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z"
            stroke="#FF2E63"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        BOOKMARKS
      </h2>
      <div className="BookmarkRow">
        {Bookmarks.map((e, i) => (
          <div key={i} className="BookmarkBlock">
            <div
              className="BookmarkContent"
              style={{ backgroundColor: e.color }}
            >
              <h3>{e.title}</h3>
              <div className="Line"></div>
              <div className="BookmarkTask">{e.tasks}</div>
            </div>
            {e.status == 3 ? (
              <div className="BookmarkProgress Stat3">COMPLETED</div>
            ) : e.status == 2 ? (
              <div className="BookmarkProgress Stat2">ONGOING</div>
            ) : (
              <div className="BookmarkProgress Stat1">NOT STARTED</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
