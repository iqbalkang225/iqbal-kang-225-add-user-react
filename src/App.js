
import { useState } from 'react';
import styles from './App.module.css'
import Card from './components/Card';
import Inputs from "./components/Inputs";
import Modal from './components/Modal';
import User from './components/User';

const App = () => {

  const usersData = [
    { id: 1, name : "Bala", age: 31 },
    { id: 2, name : "Jeeto", age: 21 },
    { id: 3, name : "Abhi", age: 11 },
    { id: 4, name : "Prince", age: 25 },
  ]

  const [users, setUsers] = useState(usersData)
  const updateUsers = (user) => setUsers(prevUsers => [ ...prevUsers, user ])

  const [showModal, setShowModal] = useState(false)

  const missingFieldsHandler = () => setShowModal(prevState => !prevState)

  return (
        
      showModal ? 

      <Modal onMissingFields = {missingFieldsHandler} /> : 
      
      <main className = {styles.container}>
      
        <Inputs onAddUser = {updateUsers} onMissingFields = {missingFieldsHandler} />

        <Card className = {styles['users-list']}>
          {
            users.map(user => <User key = {user.id} {...user} />)
          }
        </Card>
    </main>
  )
}

export default App;
