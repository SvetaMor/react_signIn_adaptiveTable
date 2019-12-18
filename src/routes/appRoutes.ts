import {LOGIN, CALCULATION_TABLE} from '../constants/routes';
import SignIn from '../Components/SignIn/SignIn';
import Table from '../Components/Table/TableContainer';
import {IAppRoute} from './../entities/IApp/IAppRoute';

export const AppRoutes: IAppRoute[] =
[
    {
        path: LOGIN,
        component: SignIn,
        exact: true
    },
    {
        path: CALCULATION_TABLE,
        component: Table,
        exact: true
    }
];
