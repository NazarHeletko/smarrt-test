import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p>My Email:</p>
        <span>heletko.nazar@gmail.com</span>
      </div>
      <div>
        <p>My Tg:</p>
        <span>@soyer12</span>
      </div>
    </div>
  );
};

export default Footer;
