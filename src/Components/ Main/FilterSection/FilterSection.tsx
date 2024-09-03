import styles from "./FilterSection.module.css";
import broom from "../../../assets/broom-icon.svg";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/hooks/redux";
import { usersSlice } from "../../../store/reducers/UsersSlice";

const FilterSection = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const { filterByName, filterByUsername, filterByEmail, filterByPhone } =
    usersSlice.actions;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(filterByName(inputValue));
  }, [inputValue.name]);
  useEffect(() => {
    dispatch(filterByUsername(inputValue));
  }, [inputValue.username]);
  useEffect(() => {
    dispatch(filterByEmail(inputValue));
  }, [inputValue.email]);
  useEffect(() => {
    dispatch(filterByPhone(inputValue));
  }, [inputValue.phone]);
  return (
    <div className={styles.filter}>
      <input
        type="text"
        value={inputValue.name}
        placeholder="sort by name"
        onChange={(e) => {
          setInputValue({ ...inputValue, name: e.target.value });
        }}
      />
      <input
        type="text"
        value={inputValue.username}
        placeholder="sort by username"
        onChange={(e) =>
          setInputValue({ ...inputValue, username: e.target.value })
        }
      />
      <input
        type="text"
        value={inputValue.email}
        placeholder="sort by email"
        onChange={(e) =>
          setInputValue({ ...inputValue, email: e.target.value })
        }
      />
      <input
        type="text"
        value={inputValue.phone}
        placeholder="sort by phone"
        onChange={(e) =>
          setInputValue({ ...inputValue, phone: e.target.value })
        }
      />
      <div className={styles.broom}>
        <img src={broom} alt="clear" />
      </div>
    </div>
  );
};

export default FilterSection;
