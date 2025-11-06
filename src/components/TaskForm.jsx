import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../store/slices/task";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)
    const [task, setTask] = useState({
        title: '',
        description: ''
    })
    

    const handlerChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    }

    const handlerSubmit = (e) => {
        e.preventDefault()

        if ( params.id ) {
            dispatch(editTask(task))
        }
        else {
            dispatch(addTask({
                ...task,
                id: uuid()
            }))
        }

        navigate('/')
    }

    useEffect(() => {
    if (params.id) {
        setTask(tasks.find((task) => task.id === params.id))
    }
    }, [params.id, tasks])


  return (
    <form
        className="bg-zinc-800 max-w-sm p-4"
        onSubmit={handlerSubmit} >

        <label htmlFor="title"
            className="block text-sm font-bold"
        >Tarea:</label>
        <input 
        name="title" 
        type="text" 
        placeholder="Titulo" 
        onChange={handlerChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 my-2"
        />

        <label htmlFor="description"
            className="block text-sm font-bold"
        >Descripcion:</label>
        <textarea
        name="description" 
        placeholder="Descripcion" 
        onChange={handlerChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 my-2"
        ></textarea>

        <button
            className="bg-indigo-600 px-2 py-1 rounded-sm"
        >Guardar</button>
    </form>
  )
}

export default TaskForm