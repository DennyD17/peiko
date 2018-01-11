import React from 'react';
import ReactDom from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './components/main'
import Products from './components/products'
import About from './components/about'
import Contacts from './components/contacts'
import Home from './components/home'
import NotFound from './components/notFound'

export default class ElementsRoute extends React.Component {

	render(){
		return(
			<div>
			<Route path='/'>
			<Main>
				<Switch>
					<Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route path='/products' component={Products} />
                    <Route exact path='/contacts' component={Contacts} />
                    <Route path='/404-not-found' component={NotFound} />
                    <Redirect from='*' to='/404-not-found'/>
                </Switch>
			</Main>
			</Route>
			</div>
			)
	}
}