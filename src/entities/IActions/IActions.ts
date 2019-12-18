export interface IAction
{
    action: {
        type: string,
        value: []|string
    }| string;
    type: string;
    value?: {
        email: string,
        password: string,
        employed?: boolean
    } | any,
    token?: string,
    isAuth: boolean
}
