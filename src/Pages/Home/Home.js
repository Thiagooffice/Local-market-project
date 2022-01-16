import React from 'react';
import logo from '../../assets/logoMaker.png'

export default function Home() {
 return (
   <>
   <nav>
     <div className="nav-container">
       <img src={logo} alt="Imagem Logo"/>
       <button>ENTRAR</button>
     </div>
   </nav>
   <section className="input-section">

     <form >
       <h1>Pesquisar produtos</h1>
       <div className="form-inputs">
       <input type="text" placeholder='Pesquisar por nome'/>
       <input min="0" type="number" placeholder='Preço máximo' />
       </div>
     </form>

   </section>

   <section className="products-section">

     <div className="products-containers">

     <div className="card">
        <h2>Brigadeiro Gormet</h2>
        <h1>R$ 5,00</h1>

        <div className="cardinfo">
          <div className="card-info-detail">
          <img src="" alt=""/>
            <p>Brigaderia do seu Zé</p>
          </div>
          <div className="card-info-detail">
          <img src="" alt=""/>
            <p>+55 /21 874245</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Brigadeiro Gormet</h2>
        <h1>R$ 5,00</h1>

        <div className="cardinfo">
          <div className="card-info-detail">
          <img src="" alt=""/>
            <p>Brigaderia do seu Zé</p>
          </div>
          <div className="card-info-detail">
          <img src="" alt=""/>
            <p>+55 /21 874245</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Brigadeiro Gormet</h2>
        <h1>R$ 5,00</h1>

        <div className="cardinfo">
          <div className="card-info-detail">
          <img src="" alt=""/>
            <p>Brigaderia do seu Zé</p>
          </div>
          <div className="card-info-detail">
          <img src="" alt=""/>
            <p>+55 /21 874245</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Brigadeiro Gormet</h2>
        <h1>R$ 5,00</h1>

        <div className="cardinfo">
          <div className="card-info-detail">
          
            <p>Brigaderia do seu Zé</p>
          </div>
          <div className="card-info-detail">
          
            <p>+55 /21 874245</p>
          </div>
        </div>
      </div>

     </div>
        
   </section>
   </>
 );
}