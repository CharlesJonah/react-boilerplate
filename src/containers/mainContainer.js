"use strict"
import React from 'react';
import { render } from 'react-dom'

import NavBar from '../components/homeComponents/navBar';
export default class MainContainer extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
            </div>
        )
    }
}