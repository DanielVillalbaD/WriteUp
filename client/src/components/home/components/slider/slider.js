import React from 'react';
import { SlideLector } from './slides/slide-lector';
import { SlideWriter } from './slides/slide-writer';

import './slider.scss';

// const styles = {
//     lector: ({ display }) => ({
//         display,
//     }),
//     escritor: ({ display }) => ({
//         display,
//     })
// }

export class HomeSlider extends React.Component {

    state = {
        active: 'false',
    }

    toggleClass = () => {
        this.setState({ active: !this.state.active });
    }

    render() {

        // const { lector, escritor } = this.state

        return (
            <div className="slider-group">
                <div onClick={this.toggleClass} className="arrow-container">
                    <div  className="arrow"></div>
                </div>
                <section id="slider">
                    <div data-slide="slide1" className={this.state.active ? 's1-active' : null}>
                        <SlideLector />
                    </div>
                    <div data-slide="slide2" className={this.state.active ? null : 's2-active'}>
                        <SlideWriter />
                    </div>
                </section>
            </div>
        );
    }
}
