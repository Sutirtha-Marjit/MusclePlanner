import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from 'react-router-dom';
import { AppRoutingConfig } from './approuting.config';



export function AppRouting() {

    const StaticPages = () => {
        const params = useParams();
        let content = <p>404</p>;
        if (params.comp) {
            const crPageConfig = AppRoutingConfig.routes.static.find((pageConfig) => {
                return (pageConfig.path.toLowerCase().trim() === params.comp.toLowerCase().trim());
            });
            if (crPageConfig) {
                content = crPageConfig.component;
            }
        }
        return <div>{content}</div>;
    };

    const getHome = () => {
        return <div className="text-light">
            <h3>Welcome to MusclePlanner</h3>
            <small>Track yourself accurately</small>
        </div>
    };

    const routerJSX = <div>

        <Router>
            <div className="container-fluid">
                <br />
                <div className="btn-group">
                    <Link className="btn btn-sm btn-dark" to="/Welcome">Home</Link>
                    <Link className="btn btn-sm btn-dark" to="/pages/faq">FAQ</Link>
                    <Link className="btn btn-sm btn-dark" to="/pages/about">About</Link>
                </div>
                <hr />
            </div>
            <Switch>
                <div className="container-fluid">
                    <Route path="/pages/:comp" children={<StaticPages />}></Route>
                    <Route path="/welcome" children={getHome()}></Route>
                </div>
            </Switch>
        </Router>
    </div>;

    return routerJSX;
}