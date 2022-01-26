import React from 'react';

export default function Card() {
    return (
        <div className="card">
            <h2>Brigadeiro Gormet</h2>
            <h1>R$ 5,00</h1>

            <div className="cardinfo">
                <div className="card-info-detail">
                    <img src="" alt="" />
                    <p>Brigaderia do seu Zé</p>
                </div>
                <div className="card-info-detail">
                    <img src="" alt="" />
                    <p>+55 /21 874245</p>
                </div>
            </div>
        </div>
    );
}