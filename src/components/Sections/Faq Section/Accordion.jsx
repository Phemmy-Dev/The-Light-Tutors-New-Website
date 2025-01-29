import { useState } from "react";
import PropTypes from 'prop-types';

const Accordion = ({title, answer}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className=" rounded-lg px-4 py-2 bg-gray-50 my-2">
        <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="flex justify-between items-center w-full"
        >
        <span className="font-bold text-xs md:text-base">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
            <svg
                className="fill-orange-500 shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
            >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden mt-2 border-t-2 text-xs md:text-sm">{answer}</div>
      </div>
    </div>
  )
}

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  };


export default Accordion
