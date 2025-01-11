export default function List({ tasks, handleClick }) {
  const taskList = tasks.map((task) => (
    <li className="listItem" key={task.id}>
      <div
        onClick={() => {
          handleClick(task);
        }}
      >
        {task.isCompleted ? <s>{task.text}</s> : task.text}
      </div>
      <div className="icons">
        <button>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button>
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
