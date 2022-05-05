import './styles.css';

function CardResumo (){
  return(
    <div className='container-resumo'>
      <h3>Resumo</h3>
      <div>
        <span >Entradas</span>
        <strong className='entrada'>R$ 10,00</strong>
      </div>
      <div>
        <span>Saídas</span>
        <strong className='saida'>R$ 1000,00</strong>
      </div>
      <div className='horizontal-linha'></div>
      <div>
        <span>Saldo</span>
        <strong className='saldo'>R$ 50,00</strong>
      </div>
    </div>
    
  );
}

export default CardResumo;