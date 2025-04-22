import { useState } from "react"

function AddTask({ onAddTask }) {
   const [titulo, setTitulo] = useState("")
   const [descricao, setDescricao] = useState("")
   return (
      <div className="bg-slate-200 space-y-4 p-6 rounded-md shadow">
         <input 
            type="text" 
            className="bg-white border-slate-300 rounded-md shadow w-full px-4 py-2" 
            placeholder="Título da tarefa"
            value = {titulo}
            onChange = {(event) => setTitulo(event.target.value)} 
            />
            
         <input 
            type="text" 
            className="bg-white border-slate-300 rounded-md shadow w-full px-4 py-2" 
            placeholder="Descrição da tarefa"
            value = {descricao}
            onChange = {(event) => setDescricao(event.target.value)}
            />
         <button 
            onClick = {() => {
               if (!titulo.trim() || !descricao.trim()) return alert ("Preencha os campos");
               onAddTask(titulo, descricao);
               setTitulo("");
               setDescricao("");
            }}
            className="bg-slate-500 text-white text-center rounded-md shadow w-full px-4 py-2 font-medium hover:bg-blue-950 duration-300">Adicionar Tarefa</button>
      </div>
   )
   
}

export default AddTask