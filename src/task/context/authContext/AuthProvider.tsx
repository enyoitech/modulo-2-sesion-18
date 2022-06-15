import React, { useReducer } from 'react'
import { User } from '../../interfaces/interfaces'
import { AuthContext } from './authContext'
import { AuthReducer } from './AuthReducer'



const INITIAL_STATE: User = {
    isAuth: false,
    user: '',
    pass: ''
}


interface IProps{
    children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({children}:IProps) => {

  const [userState, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const login =(user: string, pass: string) => {

    dispatch({type: 'login', payload: {user, pass}})
  }
  
  return (
    <AuthContext.Provider value={{
      userState,
        login
      
    }}>
        {children}
    </AuthContext.Provider>
  )
}
