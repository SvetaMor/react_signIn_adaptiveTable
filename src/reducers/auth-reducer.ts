import {authAPI} from '../api/api';
import {IFormData} from '../entities/ISignIn/ISignInProps';
import {IAction} from '../entities/IActions/IActions';
import {ITable} from '../entities/IActions/ITable';
import {SET_USER_DATA, SET_TOKEN, SET_TABLE_DATA, SET_ERROR} from '../constants/reducers';

let initialState = {
    email: '',
    password: '',
    employed: false,
    isAuth: false,
    title: [],
    table: []
};

const authReducer = (state = initialState, action: IAction&ITable) => {
    const values = action.value;
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                email: values.email,
                password: values.password,
                isAuth: true,
                employed: values.employed||false
            }
        case SET_TOKEN: {
            localStorage.setItem('JWT', action.value.name );
            return state;}
        case SET_TABLE_DATA: {
            return {
                ...state,
                title: action.value[0].title,
                table: action.value[1].table
            }
        }
        case SET_ERROR: {
            alert (action.value);
            return state;
        }
        default:
            return state;
    }
}

export const login = (dataLogin: IFormData) =>
{
    const response = authAPI.login(dataLogin); //ответ от сервера

    //получили от сервера массив со всеми попытка ввода пароля, в том числе неправильными
    const arrayResponse = Object.values(response)[0].post;
    const lengthResponse = arrayResponse.length;

    //достаем из массива последний ответ
    const currentResponse = arrayResponse[lengthResponse-1];
    const result = currentResponse[4].JWT[0];

    return result;
}

export default authReducer;
