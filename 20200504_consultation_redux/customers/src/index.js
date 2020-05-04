import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app';
import { configStore } from './helpers/redux/configStore';

const store = configStore();

ReactDOM.render(<App store={store} />, document.querySelector('#root'));