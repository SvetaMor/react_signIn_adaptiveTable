import {ITable} from '../entities/IActions/ITable';

export const getDataTable= (state: ITable) => { 
    return state.authReducer.table;
};

export const getDataTitle = (state: ITable) => {
    return state.authReducer.title;
};
