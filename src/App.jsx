import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {


  return (
    <div className="container mx-auto mt-5 max-w-1/2">
      <h1 className="text-4xl font-bold text-center">Manager de Tareas</h1>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />}/>
          <Route path="/create-task" element={<TaskForm />}/>
          <Route path="/edit-task/:id" element={<TaskForm />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App