import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "../store/slices/task"


const TaskList = () => {

    const stateTasks = useSelector(state => state.tasks)
    // console.log(stateTasks);
    const dispatch = useDispatch()

    const handleDelete = (id) => {
    dispatch(deleteTask(id))
    }

    return (
    <div className="mt-5">
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