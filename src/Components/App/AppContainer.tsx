import React, {FC} from 'react';
import {BrowserRouter} from "react-router-dom";
import store from '../../reducers/store';
import {Provider} from 'react-redux';
import App from './App';

const AppContainer: FC = () => 
{
    return <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
}

export default AppContainer;
