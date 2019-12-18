import {takeLatest, put} from 'redux-saga/effects';
import {SIGN_IN, SET_USER_DATA, SET_TOKEN, GET_TABLE, SET_TABLE_DATA, SET_ERROR}
    from '../constants/reducers';
import {CALCULATION_TABLE} from '../constants/routes';
import {login} from '../reducers/auth-reducer';
import history from '../constants/history';
import {getCalculationResults} from '../db/getResults';
import {ERROR, JWT} from '../constants/responseTypes';

function* signInAsync(values:any) {
    const token = yield login(values.values);
     
    if (token.type === ERROR) {
        yield put({type: SET_ERROR, value: token.name});
    } else if (token.type === JWT) {        
        yield put({type: SET_USER_DATA, value: values.values});
        yield put({type: SET_TOKEN, value: token});
        history.push(CALCULATION_TABLE);
    }    
}

function* getTable() {
    const dataTable = yield getCalculationResults(); 
    yield put({type: SET_TABLE_DATA, value: dataTable});    
}

export function* watchSignIn() {
    yield takeLatest(SIGN_IN, signInAsync);
    yield takeLatest(GET_TABLE, getTable);
}
