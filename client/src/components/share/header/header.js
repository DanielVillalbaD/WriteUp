import React from 'react';
import './header.scss';
import { Menu } from './menu.js';
import { Logo } from './logo.js';
import { Switcher } from './switch.js';

export class Header extends React.Component {

    clickControl = () => {
        console.log('clickado');
        document.querySelector('#root').classList.toggle('contraste');
    }

    hoverControl = () => {
        console.log("hover en logo")
    }

    render() {
        return (
            <header className="wu-header">
                <Switcher clickControl={this.clickControl} />         
                <Menu />
                <Logo hoverControl={this.hoverControl} />
            </header>
        );
    }
}
