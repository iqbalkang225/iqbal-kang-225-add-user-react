
import { useState } from 'react'
import Button from './Button'
import Card from './Card'
import styles from './Inputs.module.css'

const Inputs = ( {onAddUser, onMissingFields} ) => {

    const [formData, setFormData] = useState({
        name : '',
        age: ''
    })

    const inputChangeHandler = (e) => {
        const { name, value } = e.target

        setFormData(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    const formValidationHandler = () => {
        const { name, age } = formData

        if(!name || !age) return false;

        return true;
    }

    const addUserHandler = (e) => {
        e.preventDefault()

        if(!formValidationHandler()) {
            onMissingFields()
            return
        }

        const user =  {
            ...formData,
            id : Math.random()
        }

        onAddUser(user)
    }

    return (
        <Card className = {styles.margin}>
            <form onSubmit = {addUserHandler}>
                <div className={styles['form-controls']}>

                    <div className={styles['form-control']}>
                        <label> Name </label>
                        <input
                            type = "text"
                            name = "name"
                            value = {formData.name}
                            onChange = {inputChangeHandler}
                        />
                    </div>

                    <div className={styles['form-control']}>
                        <label> Age </label>
                        <input
                            type = "number"
                            name = "age"
                            value = {formData.age}
                            onChange = {inputChangeHandler}
                        />
                    </div>

                    <div className={styles['form-control']}>
                        <Button text = "add user" />
                    </div>

                </div>
            </form>
        </Card>
    )

}

export default Inputs