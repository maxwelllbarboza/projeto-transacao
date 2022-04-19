import './styles.css';
import SetaCima from '../../../img/seta_cima.svg'
import SetaBaixo from '../../../img/seta_baixo.svg'
import { useState } from 'react';

function TituloTabela (){  
  const [filtro, setFiltro] = useState('data');
  const [ordenar, setOrdenar] = useState('asc');

  function handleChangeFiltro(tipo){
    if(filtro === tipo){
      setOrdenar(ordenar === 'asc' ? 'desc': 'asc');
      return;
    }
    setFiltro(tipo);
  } 
  
  return(
    <div className='tabela-titulo'>
      <div 
        className='coluna-titulo cursor-pointer'
        onClick={()=> handleChangeFiltro('data')}
      >
        <span>Data</span>
        {filtro === 'data' &&
          <img 
            src={ordenar === 'asc' ? SetaCima : SetaBaixo} 
            alt='Seta para Cima'
          />
        }        
      </div>

      <div 
        className='coluna-titulo cursor-pointer'
        onClick={()=> handleChangeFiltro('diasemana')}
      >
        <span>Dia da Semana</span>
        {filtro === 'diasemana' && 
          <img 
            src={ordenar === 'asc' ? SetaCima : SetaBaixo}  
            alt='Seta para Cima'
          />
        }          
      </div>
      
      <div className='coluna-titulo'>
        <span>Descrição</span>  
      </div>
      
      <div className='coluna-titulo'>
        <span>Categoria</span>  
      </div>
      
      <div 
        className='coluna-titulo cursor-pointer'
        onClick={()=> handleChangeFiltro('valor')}
      >
        <span>Valor</span>
        { filtro === 'valor' && 
          <img 
            src={ordenar === 'asc' ? SetaCima : SetaBaixo} 
            alt='Seta para Cima'
          />
        }
        
      </div>
      
      <div className='coluna-titulo'></div>
    </div>
  );
}

export default TituloTabela;