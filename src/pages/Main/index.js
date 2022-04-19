import './styles.css';
import Header from '../../components/Header';
import Tabela from '../../components/Tabela'

function Main() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Tabela></Tabela>      
      </main>
    </div>
  );
}

export default Main;
