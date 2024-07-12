"use client";

import React from "react";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        defaultChecked={complete}
        className="checkbox checkbox-primary peer"
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor="{id}"
        className="cursor-pointer peer-checked:line-through peer-checked:text-primary"
      >
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-error ml-4">
        All Pau
      </button>
    </li>
  );
}
