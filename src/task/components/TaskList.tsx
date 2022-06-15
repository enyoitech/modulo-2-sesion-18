// import React, { useContext } from 'react'
// import { TaskContext } from '../context/TaskContext'
import { useTasks } from '../hooks/useTasks';
import { TaskItem } from './TaskItem';

export const TaskList = () => {

    // const { taskState } =  useContext(TaskContext);
    // const { tasks } = taskState;

    const {tasks}= useTasks()

  return (
    <ul>
        {/* {
            tasks.map((tarea) => <li>{tarea.description}</li> )
        } */}
        
        {
             tasks.map((tarea) => {

                 return <TaskItem key={tarea.id} task={tarea} />
                })
        }
    </ul>
  )
}
