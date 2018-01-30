import React from 'react';
import ReactDom from 'react-dom';

export default class About extends React.Component{
	
	constructor(props) {
		
		super(props);
		this.state = {
			about: [],
			requestFailed: false
		}
	}
		debugger
		async loadAbout(url) {
		await fetch(url)
		.then(res => res.json())
		.then( res => {
			this.setState({
				about: res
			})
		}, () => {
			this.setState({
				requestFailed: true
			})
		})
	}

	componentDidMount() {
		this.loadAbout('/api/about/')
	}

	render() {
		{
			this.state.about[0] != undefined ? 
			console.log(this.state.about[0].about_text) 
			:
			console.log('nothing')
		}

		{
			console.log('type ' + typeof this.state.about[0])
		}
		return(
				<div className='about'>
					{this.state.requestFailed ?
						<h1 class="error">
							Ошибка запроса к базе данных
						</h1>
						:
						null }
						{
							this.state.about[0] != undefined ?
							<div
								className='about__text'
								dangerouslySetInnerHTML={{ __html: this.state.about[0].about_text }} />
								:
								console.log('nothing')
						}
				</div>
			)
	}
}