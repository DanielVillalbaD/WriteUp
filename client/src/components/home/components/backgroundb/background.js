import React from 'react';
import './background.scss';

export class BackgroundB extends React.Component {
    render() {
        return (
            <div id="blines">
                <div className="line l1"></div>
                <div className="line l2"></div>
                <div className="line l3"></div>
                <div className="line l4"></div>
                <div className="line l5"></div>
            </div>
        );
    }
}