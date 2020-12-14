import React from 'react'
import firebaseClient from '../utils/firebaseClient'
import firebase from 'firebase/app'
import 'firebase/auth'
import nookies from 'nookies'

const AuthContext = React.createContext({})

export const AuthProvider = ({ children }) => {
  firebaseClient()
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null)
        nookies.set(undefined, 'token', '', {})
        return
      }
      const token = await user.getIdToken()
      setUser(user)
      nookies.set(undefined, 'token', token, {})
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext)
