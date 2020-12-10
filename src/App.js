//Import Sass Files
import "./App.scss";

import Header from "./left-column/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import TrendingList from "./right-column/Trending";
import Explore from "./Explore";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />

				<main>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/explore" exact>
							<Explore />
						</Route>
						<Route path="/notifications" exact>
							<div>notifications</div>
						</Route>
						<Route path="/messages" exact>
							<div>messages</div>
						</Route>
						<Route path="/bookmarks" exact>
							<div>bookmarks</div>
						</Route>
						<Route path="/lists" exact>
							<div>Lists</div>
						</Route>
					</Switch>
				</main>
			</Router>
		</div>

	);
}


export default App;
