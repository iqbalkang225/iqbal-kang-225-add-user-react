
import styles from './User.module.css'

const User = ( {name, age} ) => {
    return (
        <div className = {styles.border}>
            <h3> {name} ( {age} Years Old)</h3>
        </div>
    )
}

export default User