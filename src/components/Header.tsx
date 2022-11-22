import rocket from "./../assets/rocket.svg";
import style  from './Header.module.css'

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerLogo}>
        <img src={rocket} alt="logotipo no formato de um foguete" />
        <span>
          <span className={style.textBlue}>to</span>
          <span className={style.textPurple}>do</span> 
          </span>
      </div>
    </header>
  );
}
