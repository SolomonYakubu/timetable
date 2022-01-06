import { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";

function App() {
	return (
		<div className="App">
			<div className="container">
				{/* <Router>
				{/* <Route exact path="/">
					<Table />
				</Route> */}
				{/* <Route exact path="/"> */}
				<Dashboard />
				{/* </Route>
			</Router> */}
			</div>
		</div>
	);
}

export default App;
