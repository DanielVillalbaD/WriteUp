import React from 'react';
import { NavLink } from "react-router-dom";

export class Menu extends React.Component {



    render() {

        return (
            <nav className="header-nav">
                <div>
                    <NavLink to="/libros" linktext="Buscar" activeClassName="isActive" className="header-link">
                        Buscar
                    </NavLink>
                    <NavLink to="/upload" linktext="Leer" activeClassName="isActive" className="header-link">
                        Leer
                    </NavLink>
                </div>
            </nav>
        );
    }
}