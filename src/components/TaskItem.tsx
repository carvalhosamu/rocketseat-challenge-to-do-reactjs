import style from './TaskItem.module.css'
import trash from '../assets/trash.svg'
import { Check, CheckCircle, Trash } from 'phosphor-react';
import { Task } from '../App';

export interface TaskItemProps {
  item: Task, 
  deleteTask: (id: string) => void
  changeStatusTask: (id: string) => void
}

export function TaskItem(props: TaskItemProps) {
  
  function getRadio(): JSX.Element {
    if (props.item.completed) {
      return (
        <div onClick={handleChangeStatus} className={style.selectedRadio}>
          <Check size={10} weight="bold" />
        </div>
      )
    }
    return (
      <div onClick={handleChangeStatus} className={style.unselectedRadio}></div>
    )
  }

  function handleChangeStatus() {
    props.changeStatusTask(props.item.id);
  }

  function handleDeleteTask() {
    props.deleteTask(props.item.id);
  }
  
  return(
    <div className={style.taskItem}>
      <div>
        {getRadio()}
      </div>
      <p className={props.item.completed ? style.selectedText : style.unselectedText}>
        {props.item.description}
      </p>
      <a className={style.trash} onClick={handleDeleteTask}>
        <Trash  width={16} />
      </a>
    </div>
  );
}