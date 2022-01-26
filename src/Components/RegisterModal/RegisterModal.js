import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterModal({ setLoginForm }) {
    return (
        <div className="modal">
            <h1>Cadastrar</h1>
            <form>
            <input type="text" placeholder='Nome' />
            <input type="text" placeholder='Whatsapp' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Senha' />
                <button>CADASTRAR</button>

                <Link to=""
                onClick={setLoginForm}
                >
                    Já tenho uma conta
                </Link>

            </form>
        </div>
    );
}