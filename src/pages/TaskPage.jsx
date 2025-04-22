import { useNavigate, useSearchParams } from "react-router-dom"
import {ChevronLeftIcon} from "lucide-react";

function TaskPage() {
    const navigate = useNavigate() 
    const [searchParams] = useSearchParams();
    const titulo = searchParams.get("titulo")
    const descricao = searchParams.get("descricao")


    return (
        <div className="w-screen h-screen bg-slate-500 p-6">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative mb-6">
                    <button 
                        onClick={() => navigate(-1)}
                        className="absolute left-0 bottom-0 top-0 text-white">
                        <ChevronLeftIcon />
                    </button>
                    <h1 className="text-3xl text-white font-bold mb-4 text-center">Detalhes da tarefa</h1>
                </div>
            </div>

            <div className="bg-slate-200 p-4 rounded-md">
                <h2 className="text-xl font-bold text-slate-600">{titulo}</h2>
                <p className = "text-slate-600">{descricao}</p>

            </div>
        </div>
    )
    }

export default TaskPage
