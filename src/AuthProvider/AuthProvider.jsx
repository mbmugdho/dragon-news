import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import app from '../Firebase/firebase.config'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { useEffect } from 'react'

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword (auth, email, password)
  }
 
  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    logOut,
  }

  return (
    <div>
      <AuthContext value={authData}>{children}</AuthContext>
    </div>
  )
}

export default AuthProvider
