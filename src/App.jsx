// import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Componentes/NavBar'
import ItemListContainer from './Container/ItemListContainer';


function App() { // componente contenedor
  
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo ='Bienvenido a ShopCart' />
    </div>
  );
}

export default App