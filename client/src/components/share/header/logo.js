import React from 'react';
import './logo.scss';
import { NavLink } from "react-router-dom";

export class Logo extends React.Component {
    render () {
        const { hoverControl } = this.props
        return (
            <NavLink to="/" linktext="Inicio">
                <div onMouseOver={hoverControl} className="logo-container">
                    <svg id="logotipo" data-name="logotipo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214.999 215.168">
                        <title>WriteUp logo</title>
                        <g id="logo" className="type-style">
                            <path id="logonaranja2" className="cls1" d="M0,192.621v.205L.037,28.554a4.415,4.415,0,0,1,2.171-3.8l.933-.55L41.925.217A1.452,1.452,0,0,1,42.706,0h0a1.452,1.452,0,0,1,1.435,1.449l.271,142.913"/>
                            <path id="logonaranja1" className="cls2" d="M103.538,80.082h0l-.094,59.971a2.553,2.553,0,0,1-.691,1.743l-2.664,2.84-64.3,68.45a2.553,2.553,0,0,1-1.322.748l-3.654.789a2.553,2.553,0,0,1-2.071-.453L0,192.621"/>
                            <path id="logoazul2" className="cls3" d="M215,193.109v.205l-.037-164.272a4.415,4.415,0,0,0-2.171-3.8l-.933-.55L173.073.7a1.452,1.452,0,0,0-.781-.217h0a1.452,1.452,0,0,0-1.435,1.449l-.271,142.913"/>
                            <path id="logoazul1" className="cls4" d="M111.461,80.57h0l.094,59.971a2.553,2.553,0,0,0,.691,1.743l2.664,2.84,64.3,68.45a2.553,2.553,0,0,0,1.322.748l3.654.789a2.553,2.553,0,0,0,2.071-.453L215,193.109"/>
                        </g>
                    </svg>
                </div>
            </NavLink>
        )
    }
}