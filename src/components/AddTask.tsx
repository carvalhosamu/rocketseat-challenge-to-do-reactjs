import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import style  from './AddTask.module.css'

export interface AddTaskProps {
  addNewTask : (description: string) => void
}

export function AddTask({addNewTask} : AddTaskProps) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    addNewTask(inputValue);
    setInputValue('');
  }

  function handleChangeTaskDescription(event : ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setInputValue(event.target.value);
  }

  function handleNewTaskDescriptionInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }
  
  return(
    <form onSubmit={handleSubmit} className={style.addTask}>
      <div className={style.input}>
        <input 
          value={inputValue}
          onChange={handleChangeTaskDescription} 
          required
          onInvalid={handleNewTaskDescriptionInvalid}
          placeholder='Adicione uma nova tarefa' 
          type='text' 
        />
      </div>
      <button type='submit'>Criar<PlusCircle size={18} weight='bold'/></button>
    </form>
  )
}