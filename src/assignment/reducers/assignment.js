import { combineReducers } from 'redux';

import anatomy from './anatomy';
import dissectionLab from './dissection_lab';
import evaluation from './evaluation';
import simulation from './simulation';

export default combineReducers({
    anatomy,
    dissectionLab,
    evaluation,
    simulation
});