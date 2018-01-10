import React from 'react';
import ReactDom from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import Main from './main'
import Products from './products'
import About from './about'
import Contacts from './contacts'

export default class ElementsRoute extends React.Component {

	render(){
		return(
			<div>
			<Route path='/'>
			<Main>
				<Switch>
                    <Route exact path='/' component={About} />
                    <Route path='/products' component={Products} />
                    <Route exact path='/contacts' component={Contacts} />
                    {/*<Redirect from='*' to='/404-not-found'/>*/}
                </Switch>
			</Main>
			</Route>
			</div>
			)
	}
}