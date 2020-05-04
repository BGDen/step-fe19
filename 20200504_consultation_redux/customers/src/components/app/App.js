import React from "react";
import {Provider} from 'react-redux';
import {Header} from '../header';
import {Main} from '../main';
import {Footer} from '../footer';

export const App = ({store}) => {
    return <Provider store={store}>
        <Header store={store}/>
        <Main />
        <Footer store={store}/>
    </Provider>;
}