import Header from "./components/Header";
import List from "./components/List";
import TaskAdd from "./components/TaskAdd";
import { useState } from "react";

function App() {
  const [id, setId] = useState(0);
  const [tasks, setTasks] = useState([]);

  function handleClick(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          console.log(t.isCompleted);
          return {
            id: t.id,
            text: t.text,
            isCompleted: !t.isCompleted,
          };
        } else {
          return t;
        }
      })
    );
  }

  function handleAddClick(text) {
    setId(id + 1);
    setTasks([
      ...tasks,
      {
        id: id,
        text: text,
        isCompleted: false,
      },
    ]);
  }

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <List tasks={tasks} handleClick={handleClick} />
      </main>
      <footer>
        <TaskAdd handleAddClick={handleAddClick} />
      </footer>
    </div>
  );
}

export default App;
