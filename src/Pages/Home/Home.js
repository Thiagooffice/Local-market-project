import React, {useState} from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import Modal from '../../Components/Modal/Modal'

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal(){
    setIsModalOpen(true)
  }
  function closeModal(){
    setIsModalOpen(false)
  }

  return (
    <>
      <Navbar openModal={openModal} />
      <section className="input-section">

        <form >
          <h1>Pesquisar produtos</h1>
          <div className="form-inputs">
            <input type="text" placeholder='Pesquisar por nome' />
            <input min="0" type="number" placeholder='Preço máximo' />
          </div>
        </form>

      </section>

      <section className="products-section">

        <div className="products-containers">
          <Card />
          <Card />
          <Card />
        </div>

      </section>

      {isModalOpen ? <Modal closeModal={closeModal} /> : null}

    </>
  );
}