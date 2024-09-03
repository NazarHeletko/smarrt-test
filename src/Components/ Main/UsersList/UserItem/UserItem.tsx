import styles from "./UserItem.module.css";
import userIcon from "../../../../assets/user-icon.svg";
import usernameIcon from "../../../../assets/username-icon.svg";
import emailIcon from "../../../../assets/email-icon.svg";
import phoneIcon from "../../../../assets/phone-icon.svg";

interface Props {
  name: string;
  username: string;
  email: string;
  phone: string
}

const UserItem = ({name, username, email, phone}: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.option}>
        <img src={userIcon} alt="user-icon" />
        <h4>Name:&nbsp; </h4>
        <p>{name}</p>
      </div>
      <div className={styles.option}>
        <img src={usernameIcon} alt="username-icon" />
        <h4>Username:&nbsp; </h4>
        <p>{username}</p>
      </div>
      <div className={styles.option}>
        <img src={emailIcon} alt="email-icon" />
        <h4>Email:&nbsp; </h4>
        <p>{email}</p>
      </div>
      <div className={styles.option}>
        <img src={phoneIcon} alt="phone-icon" />
        <h4>Phone:&nbsp; </h4>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default UserItem;
