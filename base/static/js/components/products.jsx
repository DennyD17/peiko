import React from "react";
import ReactDom from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import Categories from './productsRoute/productsCategories'
import Items from './productsRoute/productsItems'

export default class Products extends React.Component {
	render() {
		return(
				<Switch>
					<Route exact path='/products' component={Categories} />
					<Route path='/products/:id' component={Items} />
				</Switch>
		)
	} 
}