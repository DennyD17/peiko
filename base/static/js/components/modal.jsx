import React from 'react';
import ReactDom from 'react-dom';

export default class Modal extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
		}
	 }

	hideModal(e){
		if (this.child.contains(e.target)){
			return
		} else {
			this.props.setInvisible('callbackModal', false);
		}
	}



	render(){
		return(
				<div 
					onClick={(e) => this.hideModal(e)}
					className={this.props.visibility ? 'modal' : 'modal_hidden'}
				>
					<div 
						ref={(child) => (this.child = child)} 
						className='modal__content'
						>
						{this.props.children}
					</div>
				</div>
			)
	}
}