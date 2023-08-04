import "./styles.css";
import { useState } from "react";

export const Accordian = ({ ques, ans }) => {
  const [show, setShow] = useState(false);

  const showAnswer = () => {
    setShow(!show);
  };
  return (
    <div className="container">
      <h4>
        {ques}
        <span className="button" onClick={showAnswer}>
          {show ? "-" : "+"}
        </span>
      </h4>
      <p className={show ? "show-answer" : "hide-answer"}>{ans}</p>
    </div>
  );
};
