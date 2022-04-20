import './styles.css';
import TituloTabela from './TituloTabela';
import lapis from '../../img/lapis_editar.svg';
import lixeira from '../../img/lixeira_apagar.svg';

function Tabela (){
  return(
    <div className='table'>
      <TituloTabela/>
      <div className='tabela-body'>
        <div className='tabela-line'>
          <div className='line-item'>01/09/21</div>
          <div className='line-item'>Quarta</div>
          <div className='line-item'>Vendas de Brigadeiro</div>
          <div className='line-item'>Pix</div>
          <div className='line-item'>R$ 100.00</div>
          <div className='line-item'>
            <img src={lapis} alt="Edit Icone"></img>
            <img src={lixeira} alt="Delete Icone"></img>
          </div>
        </div>
        <div className='tabela-line'>
          <div className='line-item'>01/09/21</div>
          <div className='line-item'>Quarta</div>
          <div className='line-item'>Vendas de Brigadeiro</div>
          <div className='line-item'>Pix</div>
          <div className='line-item'>R$ 100.00</div>
          <div className='line-item'>
            <img src={lapis} alt="Edit Icone"></img>
            <img src={lixeira} alt="Delete Icone"></img>
          </div>
        </div>
        <div className='tabela-line'>
          <div className='line-item'>01/09/21</div>
          <div className='line-item'>Quarta</div>
          <div className='line-item'>Vendas de Brigadeiro</div>
          <div className='line-item'>Pix</div>
          <div className='line-item'>R$ 100.00</div>
          <div className='line-item'>
            <img src={lapis} alt="Edit Icone"></img>
            <img src={lixeira} alt="Delete Icone"></img>
          </div>
        </div>
        <div className='tabela-line'>
          <div className='line-item'>01/09/21</div>
          <div className='line-item'>Quarta</div>
          <div className='line-item'>Vendas de Brigadeiro</div>
          <div className='line-item'>Pix</div>
          <div className='line-item'>R$ 100.00</div>
          <div className='line-item'>
            <img src={lapis} alt="Edit Icone"></img>
            <img src={lixeira} alt="Delete Icone"></img>
          </div>
        </div>
        <div className='tabela-line'>
          <div className='line-item'>01/09/21</div>
          <div className='line-item'>Quarta</div>
          <div className='line-item'>Vendas de Brigadeiro</div>
          <div className='line-item'>Pix</div>
          <div className='line-item'>R$ 100.00</div>
          <div className='line-item'>
            <img src={lapis} alt="Edit Icone"></img>
            <img src={lixeira} alt="Delete Icone"></img>
          </div>
        </div>
      </div>
    </div>   
  );
}
export default Tabela;