import React from 'react';
import { Button } from '../../../components/button';
import { Link } from 'react-router-dom';
// import { Lector } from './lector';

export class SlideLector extends React.Component {

    state = {
        btn1: "Busca un libro"
    }

    render() {

        const { btn1 } = this.state;

        return (
            <div className="slide-screen">
                <div className="home-text">
                    <h2 className="home-title">
                        Pasión literaria
                    </h2>
                    <p className="home-p">
                        WriteUp es un lector de libros sencillo, cómodo y gratuito que dispone de las funciones necesarias 
                        para disfrutar de la lectura junto a otros lectores y a un click de tus obras favoritas.
                    </p>
                    <Button>
                        <Link to="/libros">{ btn1 }</Link>
                    </Button>
                </div>
                <div className="slider lector-img">
                </div>
            </div>
        );
    }
}