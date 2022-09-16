import React from "react";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Question = ({ id, title, info }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className={`${showMore ? "item open" : "item"}`}>
        <p className="number">0{id}</p>
        <p className="text">{title}</p>
        <button className="btn-icon" onClick={() => setShowMore(!showMore)}>
          {showMore ? (
            <HiChevronUp className="icon" />
          ) : (
            <HiChevronDown className="icon" />
          )}
        </button>

        <div className="hidden-box">{info}</div>
      </div>
    </div>
  );
};

export default Question;
