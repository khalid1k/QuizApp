import React from "react";

export default function Options({ question, answer, dispatch }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-2">
      {question.options.map((option, index) => {
        let classes =
          "text-white font-bold py-2 px-4 rounded-2xl w-50 transition-all duration-300 ease-in-out transform hover:translate-x-2 ";

        if (answer === null) {
          classes += "bg-gray-500 hover:bg-gray-700";
        } else if (index === question.correctOption) {
          classes += "bg-green-500";
        } else {
          classes += "bg-red-500";
        }

        return (
          <button
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={answer !== null}
            className={classes}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
