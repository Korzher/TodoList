import { useState } from "react";

export default function TaskAdd({ handleAddClick }) {
  const [text, setText] = useState("");

  return (
    <div className="taskAdder">
      <input
        placeholder="Введите новую задачу"
        className="addInput"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          handleAddClick(text);
        }}
      >
        Добавить задачу
      </button>
    </div>
  );
}
