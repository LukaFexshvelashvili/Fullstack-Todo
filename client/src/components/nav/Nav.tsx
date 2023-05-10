import { useState } from "react";
import LiArray from "../../arrays/LiArray";
import "./Nav.css";

export default function Nav() {
  const [liActive, setLiActive] = useState(0);
  return (
    <nav>
      <div className="navCont">
        <div className="todoLogo">
          <span>T</span>
          <span>O</span>
          <span>D</span>
          <span>O</span>
        </div>
      </div>
      <ul>
        {LiArray.map((e: { text: string; icon: JSX.Element }, i: number) => (
          <li
            key={i}
            onClick={() => setLiActive(i)}
            className={`${liActive == i ? "liActive" : ""}`}
          >
            <div className="liIcon">{e.icon}</div> {e.text}
          </li>
        ))}
      </ul>
      <div className="navCont"></div>
    </nav>
  );
}
