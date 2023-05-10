import "./TaskCard.css";

export default function TaskCard() {
  return (
    <div className="TaskCard">
      <div className="TaskCardStarter">
        <div className="TaskCount">12</div>
        <p>BOOKED TASKS</p>
      </div>
      <div className="Line"></div>
      <div className="MiniTaskRow">
        <div className="MiniTask">
          <div className="MTime">6 May</div>
          <div className="MTitle">Have to go with friends</div>
          <div className="MDescription">We are going to movie</div>
        </div>
        <div className="MiniTask">
          <div className="MTime">6 May</div>
          <div className="MTitle">Have to go with friends</div>
          <div className="MDescription">We are going to movie</div>
        </div>
        <div className="MiniTask">
          <div className="MTime">6 May</div>
          <div className="MTitle">Have to go with friends</div>
          <div className="MDescription">We are going to movie</div>
        </div>
      </div>
      <button className="MiniTaskButton">SEE ALL</button>
    </div>
  );
}
