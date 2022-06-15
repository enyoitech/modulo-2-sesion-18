import React, { useReducer } from 'react'
import { TaskState } from '../../interfaces/interfaces'
import { TaskContext } from './TaskContext'
import { TaskReducer } from './TaskReducer'

const INITIAL_STATE: TaskState = {
  taskCount: 0,
  tasks: [
    {
      id: '1',
      description: 'probando',
      completed: false
    },
    {
      id: '2',
      description: 'probando 2',
      completed: true
    },
  ],
  completed: 1,
  pending: 1,
  
}


interface IProps{
    children: JSX.Element | JSX.Element[]
}

export const TaskProvider = ({children}:IProps) => {

  const [taskState, dispatch] = useReducer(TaskReducer, INITIAL_STATE);

  const toggleTaskState =(id: string) => {

    dispatch({type: 'toggleTask', payload: {id}})
  }
  
  return (
    <TaskContext.Provider value={{
      taskState,
      toggleTaskState,
      
    }}>
        {children}
    </TaskContext.Provider>
  )
}
