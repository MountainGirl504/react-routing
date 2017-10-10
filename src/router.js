import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Store from './components/Store/Store';
import Details from './components/Details/Details';
import Checkout from './components/Checkout/Checkout';

export default (
    
        <Switch>
            <Route exact path='/' component={Store}/>
            <Route path='/details/:id' component={Details}/>
            <Route path='/checkout' component={Checkout}/>
        </Switch>
    )
