import style from './EmptyTaskList.module.css'
import clipboard from '../assets/Clipboard.svg'

export function EmptyTaskList() {
  return (
    <div className={style.emptyList}>
      <img src={clipboard} alt="icone prancheta" />
      <div className={style.text}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}