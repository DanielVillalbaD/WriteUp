import React from 'react';
import './switch.scss';

export class Switcher extends React.Component {
    render () {
        const { clickControl } = this.props
        return (
            <div className="switcher">
                <input type="checkbox" id="contrast-switch" onClick={clickControl} />
                <label className="slider-v1" htmlFor="contrast-switch"></label>
            </div>
        )
    }
}