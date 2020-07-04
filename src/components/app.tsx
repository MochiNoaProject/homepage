import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";

import Home from "../routes/home";
import Profile from "../routes/profile";
import NotFoundPage from "../routes/notfound";
import Header from "./header";
import Footer from "./footer";

if (module.hot) {
    require("preact/debug");
}

const App: FunctionalComponent = () => {
    return (
        <div id="app">
            <Header />
            <Router>
                <Route path={`/`} component={Home} />
                <Route path={`/profile/`} component={Profile} user="me" />
                <Route path={`/profile/:user`} component={Profile} />
                <NotFoundPage default />
            </Router>
            <Footer />
        </div>
    );
};

export default App;
