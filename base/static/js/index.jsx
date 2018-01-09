import React from 'react';
import ReactDom from 'react-dom';
import Main from './main.jsx'

class App extends React.Component {
	render() {
		return(
				<Main/>
			);
	}
}

ReactDom.render(
		<App/>,
		document.getElementById('main')
	);