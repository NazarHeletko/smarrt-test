import UserItem from "./UserItem/UserItem";
import styles from "./UserList.module.css";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux";
import { fetchUsers } from "../../../store/reducers/getUsersAction";
import { useEffect } from "react";

const UsersList = () => {
  const dispatch = useAppDispatch();
  const { filteredUsers } = useAppSelector((state) => state.usersReducer);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  
  return (
    <div className={styles.list}>
      {filteredUsers.map((el) => (
        <UserItem
          key={el.id}
          name={el.name}
          username={el.username}
          email={el.email}
          phone={el.phone}
        />
      ))}
    </div>
  );
};

export default UsersList;
