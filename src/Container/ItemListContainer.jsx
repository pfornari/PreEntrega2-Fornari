import {useState, useEffect} from 'react';
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {

  const [products, setProducts] = useState([]);
  const { id } = useParams ();

  useEffect(() => {
    Fetch(id)
    .then (result => setProducts(result))
  }, [id]);

  return (
    <div>
      <ItemList items={products} />
    </div>
  );
}

export default ItemListContainer;