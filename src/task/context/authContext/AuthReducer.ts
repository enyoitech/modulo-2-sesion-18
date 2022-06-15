
import { User } from '../../interfaces/interfaces';

type UserAction = | {type: 'login', payload: {user: string, pass:string}} 
                 
                  
export const AuthReducer = (state: User, action: UserAction): User =>{

   switch (action.type) {

    case 'login':
            return{
                ...state,
                isAuth: true
            }

       
    default:
        return state;
   }
}