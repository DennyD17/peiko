import React from 'react';
import ReactDom from 'react-dom';

export default class Modal extends React.Component{

	render(){
		return(
				<div className={this.props.className}>
					Модальное окно
				</div>
			)
	}
}