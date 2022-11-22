import { Task } from '../App'
import { EmptyTaskList } from './EmptyTaskList'
import { TaskItem } from './TaskItem'
import style from './TaskList.module.css'

export interface TaskListProps {
  tasks : Task[],
  deleteTask: (id: string) => void
  changeStatusTask: (id: string) => void
}

export function TaskList({ tasks, deleteTask, changeStatusTask } : TaskListProps ) {
  const hasTask = tasks.length > 0;
  const totalTasks = tasks.length;
  const tasksDone = tasks.reduce((previous, current) => { 
    if (current.completed) {
      previous++
    }
    return previous
  }, 0);

  const completedTasksDescription = !hasTask ? '0' : `${tasksDone} de ${totalTasks}`

  return (
    <section className="taskList">
      <div className={style.taskCount}>
        <div className="taskCreated">
          <strong className={`${style.textCounter} ${style.textBlue}`} >Tarefas Criadas</strong>
          <span className={style.counter}>{totalTasks}</span>
        </div>
        <div className="taskDone">
          <strong className={`${style.textCounter} ${style.textPurple}`}>Concluídas</strong>
          <span className={style.counter}>{completedTasksDescription}</span>
        </div>
      </div>
      <div>
        {tasks.map(task => {
          return <TaskItem changeStatusTask={changeStatusTask} deleteTask={deleteTask} key={task.id} item={task}/>
        })}
      </div>
    </section>
  )
}