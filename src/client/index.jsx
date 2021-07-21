import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Header } from '../shared/Header';

// window.addEventListener('load', function(){
    ReactDom.hydrate(<Header />, document.getElementById('reactRoot'));

    module.hot.accept()
// });

