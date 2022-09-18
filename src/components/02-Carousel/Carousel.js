import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Carousel.css";
import { useEffect, useState } from "react";
import data from "./data";

const Carousel = () => {
  const [people, setPeople] = useState(data);
  const [idx, setIdx] = useState(0);

  const handlePrev = () => {
    setIdx((oldIdx) => {
      let newIdx = oldIdx - 1;
      if (newIdx < 0) {
        newIdx = people.length - 1;
      }
      return newIdx;
    });
  };

  const handleNext = () => {
    setIdx((oldIdx) => {
      let newIdx = oldIdx + 1;
      if (newIdx > people.length - 1) {
        newIdx = 0;
      }
      return newIdx;
    });
  };

  // ALTERNATIVE WAY WITH useEffect
  // useEffect(() => {
  //   const lastIdx = people.length - 1;
  //   if (idx < 0) {
  //     setIdx(lastIdx);
  //   }
  //   if (idx > lastIdx) {
  //     setIdx(0);
  //   }
  // }, [idx, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(slider);
  }, [idx]);

  return (
    <div className="carousel">
      <img src={people[idx].image} alt="person image" />
      <blockquote className="testimonial">
        <p className="testimonial-text">{people[idx].quote}</p>
        <p className="testimonial-author">{people[idx].name}</p>
        <p className="testimonial-job">{people[idx].title}</p>
      </blockquote>

      <button className="btn btn__left" onClick={handlePrev}>
        <HiChevronLeft className="btn-icon" />
      </button>
      <button className="btn btn__right" onClick={handleNext}>
        <HiChevronRight className="btn-icon" />
      </button>

      <div className="dots">
        <button
          className={idx === 0 ? "dot dot__fill" : "dot"}
          onClick={() => setIdx(0)}
        >
          &nbsp;
        </button>
        <button
          className={idx === 1 ? "dot dot__fill" : "dot"}
          onClick={() => setIdx(1)}
        >
          &nbsp;
        </button>
        <button
          className={idx === 2 ? "dot dot__fill" : "dot"}
          onClick={() => setIdx(2)}
        >
          &nbsp;
        </button>
        <button
          className={idx === 3 ? "dot dot__fill" : "dot"}
          onClick={() => setIdx(3)}
        >
          &nbsp;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
