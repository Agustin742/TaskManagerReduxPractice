import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";


const App = () => {


  return (
    <div className="container mx-auto mt-5 max-w-1/2">
      <h1 className="text-4xl font-bold text-center">Tareas</h1>
      
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App