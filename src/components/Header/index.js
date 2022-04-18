import './styles.css';
import logo from '../../img/logo.svg';

function Header() {
  return(
    <header>
      <img src={logo} alt='Logo' /> 
    </header>
  );
}

export default Header;