import {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail.jsx';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

  const [oneProduct, setOneProduct] = useState();
  const { id } = useParams ();

  useEffect(() => {
    Fetch(id)
      .then(result => setOneProduct(result))
      .catch(err => console.log(err))
  }, [id]);

  return (
    oneProduct 
    ? <ItemDetail item={oneProduct}/> 
    :
      <div>
        <p className="cargando">Cargando ... </p>
      </div>
  );
};

export default ItemDetailContainer;