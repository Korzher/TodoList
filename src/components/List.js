import { useState } from "react";

export default function List({
  tasks,
  toggleComplete,
  changeTask,
  deleteTask,
}) {
  const taskList = tasks.map((task) => (
    <li className="listItem" key={task.id}>
      <ListItem
        task={task}
        toggleComplete={toggleComplete}
        changeTask={changeTask}
        deleteTask={deleteTask}
      />
    </li>
  ));

  return (
    <>
      <ol className="mainList">{taskList} </ol>
    </>
  );
}

function ListItem({ task, toggleComplete, changeTask, deleteTask }) {
  const [editing, setEditing] = useState(false);
  let taskContent;
  if (editing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => changeTask(e, task)}
          className="editInput"
        />
        <div className="icons">
          <button onClick={() => setEditing(false)} className="fa-solid text">
            Сохранить
          </button>
          <button onClick={() => deleteTask(task)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </>
    );
  } else {
    taskContent = (
      <>
        <div
          onClick={() => {
            toggleComplete(task);
          }}
        >
          <p className="itemName">
            {task.isCompleted ? <s>{task.text}</s> : task.text}{" "}
          </p>
        </div>
        <div className="icons">
          <button onClick={() => setEditing(true)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => deleteTask(task)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </>
    );
  }
  return taskContent;
}
