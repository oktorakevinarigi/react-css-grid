import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import GridLine from './GridLine'
// import NestedGrids from './NestedGrids'
// import Aligning from './Aligning'
// import ColumnGrid12 from './ColumnGrid12'
// import Mosaic from './Mosaic'
import GridAreas from './GridAreas'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<GridAreas />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
