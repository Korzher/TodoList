export default function List() {
  const tasks = [
    {
      id: 1,
      task: "Добавить лист",
      completed: true,
    },
    {
      id: 2,
      task: "Добавить задачи",
      completed: true,
    },
    {
      id: 3,
      task: "Добавить логику",
      completed: false,
    },
    {
      id: 4,
      task: "Все это связать",
      completed: false,
    },
    {
      id: 5,
      task: "Сделать все более менее красиво",
      completed: false,
    },
    {
      id: 6,
      task: "Сделать адаптив",
      completed: false,
    },
    {
      id: 7,
      task: "Задеплоить",
      completed: false,
    },
  ];

  const taskList = tasks.map((tasks, index) => (
    <li className="listItem" key={tasks.id}>
      <div>
        {index + 1}. {tasks.task}
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
      <ul className="mainList">{taskList} </ul>
    </>
  );
}
