import React from 'react';

import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import screens from '../GlobalConstants/Screens';

import HomeScreen from '../Screens/Home/HomeScreen'

export default function MainRouter() {
    let match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={screens.HomeScreen}>
                    <HomeScreen />
                </Route>
            </Switch>
        </div>

    )
}
