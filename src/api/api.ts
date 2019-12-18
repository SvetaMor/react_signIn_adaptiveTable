import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {IFormData} from '../entities/ISignIn/ISignInProps';
import {LOGIN, PASSWORD} from '../db/userLoginData';

//используем заглушку mock для имитации отпрвки/получения данных с сервера
const mock = new MockAdapter(axios);

//функция authAPI отправляет POST-запрос на сервер с данными, которые ввел пользователь,
//возвращает JWT-токен при успешной авторизации или ERROR
export const authAPI = {
  login(dataLogin: IFormData){ 
    if ((dataLogin.email !== LOGIN)
      &&(dataLogin.password !== PASSWORD))
      return mock.onPost('/login', { params: dataLogin })
        .reply(200, {
          JWT: [
            { type: 'error',
              name: 'неверная пара логин - пароль'
            }
          ]
        }); 
    else
      return mock.onPost('/login', { params: dataLogin })
        .reply(200, {
          JWT: [
            { type: 'jwt',
              name: '86fasfgfsogHGad' 
            }
          ]
        });
  }
}
