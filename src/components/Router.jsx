import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from '../routes/Signup';

export default () => {
    return(
        <Router>
            <Switch>
                <Route path = '/' exact={true} component={Signup}></Route>
            </Switch>
        </Router>
    )
}
