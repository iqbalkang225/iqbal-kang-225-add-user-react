
import styles from './Button.module.css'

const Button = (props) => {
    console.log(props)
    return <button 
                className = {styles.button}
                onClick = {props.onMissingFields}
                > {props.text} </button>
}
export default Button