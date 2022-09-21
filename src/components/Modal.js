
import Button from './Button'
import Card from './Card'
import styles from './Modal.module.css'

const Modal = ( props ) => {

    return (
        <div className = {styles.modal}>
            <Card>

                <div>
                    <h2>Invalid Input !</h2>
                </div>

                <div className = {styles['modal-info']}>
                    <p>Please enter a valid name and age (non-empty values) </p>
                    <Button text = "okay" onMissingFields = {props.onMissingFields}> </Button>
                </div>

            </Card>
        </div>
    )
}

export default Modal