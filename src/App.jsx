import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";

function App() {
   const [tasks, setTasks] = useState(
      JSON.parse(localStorage.getItem("tasks")) || []
   ) 

   useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
   }, [tasks]);

   function onTaskClick(TaskId) {
      const newTasks = tasks.map((task) => {
         // Precisa atualizar
         if (task.id === TaskId) {
            return {...task, completo: !task.completo}
         }

         return task;
      })
      setTasks(newTasks);
   }

   function onDeleteTask(TaskId) {
      const newTasks = tasks.filter((task) => task.id !== TaskId);
      setTasks(newTasks);
   }

   function onAddTask(titulo, descricao) {
      const newTask = {
         id: tasks.length + 1, 
         titulo,
         descricao,
         completo: false
      }
      setTasks([...tasks, newTask]);
   }


   return (
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6"> 
         <div className="w-[500px] space-y-4">
            <h1 className="text-3xl text-slate-100 font-gold text-center mb-4">
               Gerenciador de Tarefas
            </h1>
            <AddTask onAddTask = { onAddTask} />
            <Tasks tasks={tasks} onTaskClick= { onTaskClick } onDeleteTask = { onDeleteTask } />
         </div>
      </div> 
   );
}

export default App;
