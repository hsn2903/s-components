import "./Pagination.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="btn">
        <IoChevronBack className="btn-icon" />
      </button>
      <a href="#" className="page-link">
        1
      </a>
      <a href="#" className="page-link">
        2
      </a>
      <a href="#" className="page-link page-link--current">
        3
      </a>
      <a href="#" className="page-link">
        4
      </a>
      <a href="#" className="page-link">
        5
      </a>
      <a href="#" className="page-link">
        6
      </a>
      <span className="dots">...</span>
      <a href="#" className="page-link">
        23
      </a>
      <button className="btn">
        <IoChevronForward className="btn-icon" />
      </button>
    </div>
  );
};

export default Pagination;
