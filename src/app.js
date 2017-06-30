"use strict"
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const App = (props) => (
    <MuiThemeProvider>
        {props.children}
    </MuiThemeProvider>
);

export default App;