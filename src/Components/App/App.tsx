import React, { FC } from 'react';
import {Route, Switch, Router, withRouter} from "react-router-dom";
import history from '../../constants/history';
import {AppRoutes} from '../../routes/appRoutes';
import {IAppRoute} from '../../entities/IApp/IAppRoute';

const App: FC = () => 
{
   return (
      <Router history={history}>
         <div>
            <Switch>
            {
               AppRoutes.map((route: IAppRoute) => (
                  <Route exact={route.exact}
                        path={route.path}
                        component={route.component}
                        key={route.path} 
                  />
               ))
            }
            </Switch>
         </div>
      </Router>
   )   
}

export default withRouter(App);
