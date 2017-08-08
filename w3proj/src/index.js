import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BaseLayout from "./BaseLayout.js";
import Home from "./view/home.js";
import Shop from "./view/shop.js";
import About from "./view/about.js";
import Contact from "./view/contact.js";
import OneSeat from "./view/oneseat.js";
import Hybrid from "./view/hybrid.js";
import Twoseat from "./view/twoseat.js";

ReactDOM.render(
    <BrowserRouter>
        <App>
            <BaseLayout>
                <Switch>
                    <Route exact path = '/' component = {Home}/>
                    <Route path = '/shop' component = {Shop}/>
                    <Route path = '/about' component = {About}/>
                    <Route path = '/contact' component = {Contact}/>
                    <Route path = '/oneseat' component = {OneSeat}/>
                    <Route path = '/hybrid' component = {Hybrid}/>
                    <Route path = '/twoseat' component = {Twoseat}/>
                </Switch>
            </BaseLayout>
        </App>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
