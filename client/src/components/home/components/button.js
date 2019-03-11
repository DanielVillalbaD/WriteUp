import React from 'react';
import './button.scss';

export class Button extends React.Component {
    render() {
        const { children } = this.props
        
        return (
            <div className="btn-h btn-transform">
                <div className="line-btn horizontal"></div>
                <div className="btn-txt">
                    {children}
                </div>
            </div>
        );
    }
}