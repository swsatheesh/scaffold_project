import React from 'react';
import ReactDOM from 'react-dom';
import PouchProvider from 'kqilp_components/pouch/pouch_provider';

import config from './config/config';
import MainContainer from './main_container';
import experiment from './assignment/reducers/assignment';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <PouchProvider
        id={config.metadata.id}
        reducers={experiment}
        config={config}
    >
        <MainContainer />
    </PouchProvider>
    , document.getElementById('root'));
registerServiceWorker();
