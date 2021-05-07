import React from "react";
import Nav from "./Nav";

export default class App extends React.Component {
	render() {
		return (
			<div style={{ textAlign: "center" }}>
				<Nav />
				<h1>Hello World</h1>
			</div>
		);
	}
}
