import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

const App = () => (
  

  	<div>
  		<Nav />
  		<Router>
  		<Switch>
    		<Route exact path= "/" component = {Books} />   	
    		<Route component = {NoMatch} />
    	</Switch>
  </Router>
  	</div>
  

 
export default App;
