import React, { Component } from 'react';

import Iframe from "react-iframe";

class Map extends Component {
	render() {
		return (
			<Iframe
				url= {this.props.location}
				width="775px"
				height="850px"
				id="myId"
				className="myClassname"
				display="initial"
				position="relative"
				allowFullScreen
			/>
		)
	}
}

export default Map;