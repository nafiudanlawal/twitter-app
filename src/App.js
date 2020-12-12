//Import Sass Files
import "./App.scss";

import Header from "./left-column/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Explore from "./Explore";
import Notifications from "./Notifications";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<main>
					<Switch>
						<Route path="/" exact={true}>
							<Home />
						</Route>
						<Route path="/explore" exact={true}>
							<Explore />
						</Route>
						<Route path="/notifications">
							<Notifications />
						</Route>
						<Route path="/messages" exact={true}>
							<div>messages</div>
						</Route>
						<Route path="/bookmarks" exact={true}>
							<div>bookmarks</div>
						</Route>
						<Route path="/lists" exact={true}>
							<div>Lists</div>
						</Route>
					</Switch>
				</main>
			</div>
		</Router>

	);
}


export default App;
