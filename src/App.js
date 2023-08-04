import "./styles.css";
import { Accordian } from "./Accordian";
import { question } from "./question";

export default function App() {
  return (
    <div className="App">
      <h1>FAQs</h1>
      {question.map((question) => (
        <div key={question.id}>
          <Accordian ques={question.q} ans={question.a} />
        </div>
      ))}
    </div>
  );
}
