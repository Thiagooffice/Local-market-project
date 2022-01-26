
import React from 'react';
import logo from '../../assets/logoMaker.png'

export default function NavBar() {
    return (
        <nav>
            <div className="nav-container">
                <img src={logo} alt="Imagem Logo" />
                <button>ENTRAR</button>
            </div>
        </nav>
    );
}