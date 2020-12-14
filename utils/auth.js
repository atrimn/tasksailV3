import firebase from 'firebase/app'
import 'firebase/auth'
// useful functions for Authentication

export function Login(event, email, password) {
  event.preventDefault()
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch((error) => console.log(error.message))
}

export function CreateAccount(event, email, password) {
  event.preventDefault()
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      return user
    })
    .catch((error) => {
      console.log(error.message)
    })
}
