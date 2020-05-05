import React from "react";
import {Provider} from 'react-redux';
import {Header} from '../header';
import {Main} from '../main';
import {Footer} from '../footer';
import { ReactReduxContext } from 'react-redux';

export const App = ({store}) => {
    return <Provider store={store}>
        <Header store={store}/>
        <Main store={store}/>
        <Footer store={store}/>
    </Provider>;
}