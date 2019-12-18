import {FormReducer} from 'redux-form/lib/reducer';

interface IAuthReducer 
{
    email: string,
    password: string,
    employed: boolean,
    isAuth: boolean,
}

export interface IState 
{
    auth: IAuthReducer,
    form: FormReducer
}