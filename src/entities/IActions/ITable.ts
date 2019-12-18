export interface IProps {
    getTable: ()=>void;
    table: [];
    title: [];
}

export interface IAuthReducer {
    email: string;
    password: string;
    employed: boolean;
    isAuth: boolean;
    table: [];
    title: [];
}

export interface ITable {
    type?: string;
    title: string[];
    table: never[];
    getTable?: any;
    props: IProps | any;
    authReducer?: IAuthReducer | any;
}
export interface ITableProps extends ITable {
    showResults?: boolean;
}
