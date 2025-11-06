import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "../store/slices/task"
import { Link } from "react-router-dom"


const TaskList = () => {

    const stateTasks = useSelector(state => state.tasks)
    // console.log(stateTasks);
    const dispatch = useDispatch()



    const handleDelete = (id) => {
    dispatch(deleteTask(id))
    }

    return (
    <div className="mt-5">

      <header>
        <h2>Toltal de Tareas: {stateTasks.length}</h2>

        <Link to={'/create-task'}>
        Crear Tarea
        </Link>
      </header>
        {stateTasks && stateTasks.map((task) => (
            <div
            className=" border border-gray-700 m-2 rounded-sm p-2 transition-all hover:scale-105 hover:shadow-md duration-500 focus:border-transparent"
            key={task.id}>
                <h3
                className="text-lg font-bold m-1 "
                >{task.title}</h3>
                <p
                className="m-1"
                >{task.description}</p>
                <button onClick={() => handleDelete(task.id)}>Borrar</button>
                
            </div>
        ))}

    </div>
  )
}

export default TaskList