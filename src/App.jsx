// import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Componentes/NavBar'
import ItemListContainer from './Container/Cart';
import ItemListContainer from './Container/CartContext';
import ItemListContainer from './Container/Item';
import ItemListContainer from './Container/ItemCount';
import ItemListContainer from './Container/ItemCountDetail';
import ItemListContainer from './Container/ItemDetail';
import ItemListContainer from './Container/ItemDetailContainer';
import ItemListContainer from './Container/ItemList';
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