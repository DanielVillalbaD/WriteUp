import React from 'react';
import { Button } from '../../../components/button';
import { Link } from 'react-router-dom';

// import { Escritor } from './escritor';

export class SlideWriter extends React.Component {

    state = {
        btn1: "Escucha un libro"
    }

    render() {

        const { btn1 } = this.state;

        return (
            <div className="slide-screen">
                <div className="home-text">
                    <h2 className="home-title">
                        Accesibilidad
                    </h2>
                    <p className="home-p">
                        WriteUp ofrece posibilidades de lectura de alto contraste y un speaker para escuchar libros o documentos. WriteUp facilita la tarea de lectura a aquellos que más lo necesitan.
                    </p>
                    <Button>
                        <Link to="/upload">{ btn1 }</Link>
                    </Button>
                </div>
                <div className="slider writer-img">
                </div>
            </div>
        );
    }
}