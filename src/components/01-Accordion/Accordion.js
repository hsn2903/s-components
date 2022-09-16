import "./Accordion.css";
import { useState } from "react";
import data from "./data";
import Question from "./Question";

const Accordion = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="accordion">
      <h1>Questions & Answers About Login</h1>
      {questions.map((question, idx) => {
        return <Question key={idx} {...question} />;
      })}
    </div>
  );
};

export default Accordion;
