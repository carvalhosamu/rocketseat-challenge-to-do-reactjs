import { useState } from 'react'
import style from './App.module.css'
import { Header } from './components/Header'
import {AddTask} from './components/AddTask'
import { TaskList } from './components/TaskList'
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string;
  description: string;
  completed: boolean;
}

const defaultItens : Task[] = [
  {
    id: uuidv4(),
    description: "Teste",
    completed: true
  },
  {
    id: uuidv4(),
    description: "Teste não completo",
    completed: false
  }
]

function App() {
  
  const [tasks, setTasks] = useState(defaultItens)

  function deleteTask(id: string) {
    setTasks(state => state.filter(task => task.id !== id));
  }

  function changeTaskStatus(id: string) {
    
    setTasks(state => {
      return state.map(task =>  {
        if (task.id === id) {
          return {...task, completed: !task.completed}
        }
        return task;
      });
    })
  }

  function addNewTask(description: string) {
    const newTask : Task = {
      completed: false,
      description: description,
      id : uuidv4()
    }


    setTasks(state => [...state, newTask])
  }

  return (
    <>
      <Header/>
      <div className={style.wrapper}>
        <AddTask addNewTask={addNewTask}/>
        <TaskList 
          tasks={tasks} 
          changeStatusTask={changeTaskStatus} 
          deleteTask={deleteTask}
        />
      </div>
    </>
  )
}

export default App
