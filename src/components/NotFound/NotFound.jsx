import { NavLink } from "react-router";
import gif from "../../assets/images/not-found.gif";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>404</h1>
      <span>Страница потерялась</span>
      <p>Похоже, вы пошли не туда. Такой страницы не существует.</p>
      <img src={gif} alt="Not Found" />
      <NavLink to="/" className={styles.link}>
        Вернуться на главную
      </NavLink>
    </div>
  );
};

export default NotFound;
