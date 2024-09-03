import FilterSection from "./FilterSection/FilterSection";
import styles from "./Main.module.css"
import UsersList from "./UsersList/UsersList";


const Main = () => {
    return(
        <div className={styles.main}>
            <FilterSection/>
            <UsersList/>
        </div>
    )
}

export default Main;