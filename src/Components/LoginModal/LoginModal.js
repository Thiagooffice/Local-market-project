import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginModal({ setRegisterForm }) {
    return (
        <div className="modal">
            <h1>Entrar</h1>
            <form>
                <input type="text" placeholder='Email' />
                <input type="password" placeholder='Senha' />
                <button>Entrar</button>

                <Link to="" onClick={setRegisterForm}>
                    Criar conta</Link>

            </form>
        </div>
    );
}