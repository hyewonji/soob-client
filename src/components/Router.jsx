import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from '../routes/Signup';

function Router (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = '/' exact={true} component={Signup}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;