
import React from 'react';
import logo from '../../assets/logoMaker.png'

export default function NavBar({ openModal }) {
    return (
        <nav>
            <div className="nav-container">
                <img src={logo} alt="Imagem Logo" />
                <button onClick={openModal} >ENTRAR</button>
            </div>
        </nav>
    );
}