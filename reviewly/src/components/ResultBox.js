import React from "react";

export default function ResultBox(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="box-border h-32 w-screen p-4 border-4">
      <div>{props.review}</div>
      <button
        onClick={handleClick}
        className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
      >
        Delete
      </button>
    </div>
  );
}
