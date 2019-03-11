import React from 'react';
import './button.scss';

export class ButtonReverse extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div className="btn-h-reverse btn-transform">
                <div className="line-btn horizontal"></div>
                <div className="btn-txt">
                    {children}
                </div>
            </div>
        );
    }
}