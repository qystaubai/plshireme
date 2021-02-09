import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {MainPage} from "./pages/MainPage";
import {AnalyticsPage} from "./pages/AnalyticsPage";

const App: React.FC = () => (
    <div className="container">
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/analytics" component={AnalyticsPage}/>
                <Redirect to={"/"}/>
            </Switch>
        </Router>
    </div>
);

export default App;
