import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks ({tasks, onTaskClick, onDeleteTask}) {
    const navigate = useNavigate()

    function OnSeeDetailsClick(task) {
        const query = new URLSearchParams() 
        query.set("titulo", task.titulo)
        query.set("descricao", task.descricao)

        navigate(`/task?${query.toString()}`)
    }

    return ( 
    <ul className="space-y-4 bg-slate-200 p-6 rounded-md shadow">
        {tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
                <button 
                    onClick={() => onTaskClick(task.id)}  
                    className={`bg-slate-400 w-full text-left text-white p-2 rounded-md ${task.completo && 'line-through'}`}
                    > 
                    {task.titulo}
                </button>

                <button 
                    onClick = {() => OnSeeDetailsClick(task) }
                    className="bg-slate-400 p-2 text-white rounded-md">
                    <ChevronRightIcon />
                </button>

                <button
                    onClick={() => onDeleteTask(task.id)} 
                    className="bg-slate-400 p-2 text-white rounded-md">
                    <Trash />
                </button>
            </li>
        ))}
    </ul>
    );
};




export default Tasks;