import React, { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Paginacion = ({ nextPagination, setNextPagination, maximo }) => {
  
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(input + 1);
    setNextPagination(nextPagination + 1);
  };

  const previousPage = () => {
    setInput(input - 1);
    setNextPagination(nextPagination - 1);
  };

  return (
    <div className="container-pagination">
      <div className="pagination-inputs">
        <button
          onClick={previousPage}
          disabled={nextPagination === 1 || nextPagination < 1}
        >
          <BsFillArrowLeftCircleFill className="buttons-icon" />
          Previous
        </button>
        <input name="page" autoComplete="off" value={input} />
        <button onClick={nextPage} disabled={nextPagination === 10}>
          <BsFillArrowRightCircleFill className="buttons-icon" />
          Next
        </button>
      </div>
      <div className="pagination-data">
        <p>1 D {maximo}</p>
      </div>
    </div>
  );
};

export default Paginacion;
