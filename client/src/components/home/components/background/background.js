import React from 'react';
import './background.scss';

export class Background extends React.Component {
    render() {
        return (
            <div id="lines">
                <div className="line l1"><span className="b1"></span></div>
                <div className="line l2"><span className="b2"></span></div>
                <div className="line l3"><span className="b3"></span></div>
                <div className="line l4"><span className="b4"></span></div>
                <div className="line l5"><span className="b5"></span></div>
            </div>
        );
    }
}