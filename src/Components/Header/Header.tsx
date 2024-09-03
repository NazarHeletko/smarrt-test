import styles from "./Header.module.css";
import logo from "../../assets/smart_transp.png";
import git from "../../assets/github-icon.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="smart-it" />
        <span>
          Heletko Nazar <br /> test task
        </span>
      </div>
      <div className={styles.git}>
        <span>Code &#10137;</span>
        <a href="https://github.com/NazarHeletko/smarrt-test" target="blank">
          <img src={git} alt="Github" />
        </a>
      </div>
    </div>
  );
};

export default Header;
