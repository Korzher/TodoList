import Header from "./components/Header";
import List from "./components/List";
import TaskAdd from "./components/TaskAdd";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <List />
        <TaskAdd />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
