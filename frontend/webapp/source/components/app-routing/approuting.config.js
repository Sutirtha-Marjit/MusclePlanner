import React from 'react';
import { FAQPage } from '../infopages/FAQ.comp';
import { AboutPage } from '../infopages/about.comp';
import { NotFoundPage } from '../infopages/404.comp';

export class AppRoutingConfig{}

AppRoutingConfig.routes = {};
AppRoutingConfig.routes.static = [
    {
        path: "faq",
        component: <FAQPage/>
    },
    {
        path: "about",
        component: <AboutPage/>
    },
    {
        path:null,
        component: <NotFoundPage/>
    }
];
