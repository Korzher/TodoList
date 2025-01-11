export default function List({
  tasks,
  toggleComplete,
  changeTask,
  deleteTask,
}) {
  const taskList = tasks.map((task) => (
    <li className="listItem" key={task.id}>
      <div
        onClick={() => {
          toggleComplete(task);
        }}
      >
        {task.isCompleted ? <s>{task.text}</s> : task.text}
      </div>
      <div className="icons">
        <button onClick={() => changeTask(task)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => deleteTask(task)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  ));

  return (
    <>
      <ol className="mainList">{taskList} </ol>
    </>
  );
}
