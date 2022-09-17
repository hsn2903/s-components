import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Carousel.css";
import mariaImage from "../../assets/img/maria.jpg";
import { useState } from "react";

const Carousel = () => {
  const [idx, setIdx] = useState(0);

  return (
    <div className="carousel">
      <img src={mariaImage} alt="Maria de Almeida" />
      <blockquote className="testimonial">
        <p className="testimonial-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eum
          aperiam dignissimos reiciendis debitis, doloremque officia quos
          architecto! Eaque, officiis!
        </p>
        <p className="testimonial-author">Maria de Almeida</p>
        <p className="testimonial-job">
          Senior Product Manager at EDP Commercial
        </p>
      </blockquote>

      <button className="btn btn__left">
        <HiChevronLeft className="btn-icon" />
      </button>
      <button className="btn btn__right">
        <HiChevronRight className="btn-icon" />
      </button>
      <div className="dots">
        <button className="dot dot__fill">&nbsp;</button>
        <button className="dot">&nbsp;</button>
        <button className="dot">&nbsp;</button>
        <button className="dot">&nbsp;</button>
      </div>
    </div>
  );
};

export default Carousel;
