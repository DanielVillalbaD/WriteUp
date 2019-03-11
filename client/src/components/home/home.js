import React from 'react';
import './home.scss';
import { Background } from './components/background/background';
import { HomeSlider } from './components/slider/slider';

export class Home extends React.Component {

    render() {

        return (
            <main id="home">
                <Background />
                <HomeSlider />
            </main>
        )
    }
}
