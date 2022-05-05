import './styles.css';
import Header from '../../components/Header';
import Tabela from '../../components/Tabela'
import Modal from '../../components/Modal'
import { useEffect, useState } from 'react';
import CardResumo from '../../components/CardResumo';
import Botao from '../../components/Botao';

function Main() {
// const [transactions, setTransactions] = useState([]);
const [open] = useState(true)

useEffect(() => {
  handleLoadTransacao();
}, []);


  async function handleLoadTransacao(){
    const response = await fetch('http://localhost:3334/trnsactions',{
      method: 'GET'      
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="App">
      <Header/>
      <main>
        <Tabela/>
        <div>
          <CardResumo></CardResumo>
          <Botao >Adicionar Registro</Botao>
        </div>
      </main>
      {open && <Modal/>}
    </div>
  );
}

export default Main;
