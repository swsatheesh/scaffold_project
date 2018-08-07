import React from 'react';
import ReactDOM from 'react-dom';
import PouchProvider from 'kqilp_components/pouch/pouch_provider';

import config from './config/config';
import MainContainer from './main_container';
import assignment from './assignment/reducers/assignment';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <PouchProvider
        id={config.metadata.id}
        reducers={assignment}
        config={config}
    >
        <MainContainer />
    </PouchProvider>
    , document.getElementById('root'));
registerServiceWorker();
