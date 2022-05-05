import './styles.css';
import close from '../../img/btn_fechar.svg'


function Modal (){
  return(
    <>
      <div className='fundo-modal'>
        <div className='modal-content'>
          <img className='close-icone' src={close} alt="Botão de fechar"/>
        </div>

      </div>
    </>
    
  );
}

export default Modal;