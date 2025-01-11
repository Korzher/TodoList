import Header from "./components/Header";
import List from "./components/List";
import TaskAdd from "./components/TaskAdd";
import { useState } from "react";

function App() {
  const [id, setId] = useState(0);
  const [tasks, setTasks] = useState([]);

  function toggleComplete(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
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

  function changeTask(e, task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return {
            id: t.id,
            text: e.target.value,
            isCompleted: t.isCompleted,
          };
        } else {
          return t;
        }
      })
    );
  }

  function deleteTask(task) {
    setTasks(tasks.filter((t) => task.id !== t.id));
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
        <List
          tasks={tasks}
          toggleComplete={toggleComplete}
          changeTask={changeTask}
          deleteTask={deleteTask}
        />
      </main>
      <footer>
        <TaskAdd handleAddClick={handleAddClick} />
      </footer>
    </div>
  );
}

export default App;
