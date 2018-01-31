import React from 'react';
import ReactDom from 'react-dom';

export default class Modal extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
		}
	 }

	hideModal(e){
		e.preventDefault();
		if (this.child.contains(e.target)){
			return
		} 
			this.props.setInvisible( this.props.statePoint, false);
		
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
						<div 
							onClick={() => {this.props.setInvisible( this.props.statePoint, false)}}
						>
							X
						</div>
						{this.props.children}
						хуй
					</div>
				</div>
			)
	}
}