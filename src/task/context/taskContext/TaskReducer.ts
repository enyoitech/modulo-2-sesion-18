
import { TaskState, Task } from '../../interfaces/interfaces';

type TaskAction = | {type: 'addTask', payload:Task} 
                  | {type: 'toggleTask', payload: {id:string}} 
                  
export const TaskReducer = (state: TaskState, action: TaskAction): TaskState =>{

   switch (action.type) {

    case 'addTask':
            return{
                ...state,
                tasks: [...state.tasks, action.payload]
            }

    case 'toggleTask':
        return{
            ...state,
            tasks: state.tasks.map( ( {...tarea} )=>{
                if (tarea.id === action.payload.id) {
                    tarea.completed = !tarea.completed;
                }
                return  tarea
                
            })
        }
   
    default:
        return state;
   }
}