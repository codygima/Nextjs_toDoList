import React from "react";

interface PauProps {
  id: string;
  deleteToDo: () => void;
}
export function Pau({ id, deleteToDo }: PauProps) {
  return (
    <div className="flex justify-center">
      <button
        id={id}
        onClick={deleteToDo}
        className="btn btn-error btn-block text-xl mt-4"
      >
        All Pau
      </button>
    </div>
  );
}
