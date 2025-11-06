import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../store/slices/task";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlerChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask({
            ...task,
            id: uuid()
        }))
        navigate('/')
    }

  return (
    <form onSubmit={handlerSubmit} 
    className="flex justify-around items-center ">
        <input 
        className="border border-gray-400 outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent rounded-sm h-10 p-2" 
        name="title" 
        type="text" 
        placeholder="Titulo" 
        onChange={handlerChange} />

        <textarea
        className="border border-gray-400 outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent rounded-sm w-3xs h-15 p-2"
        name="description" 
        placeholder="Descripcion" 
        onChange={handlerChange}></textarea>

        <button className="bg-blue-600 rounded-lg px-4 py-2 text-white transition-all hover:scale-105 hover:shadow-md active:scale-90 duration-500">Guardar</button>
    </form>
  )
}

export default TaskForm