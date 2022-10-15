import React from 'react';
import ItemCount from './ItemCount.jsx';
import { Link } from 'react-router-dom';

function Item(props) {
  return (

    <div className="card">
      <div className="card_contenido">
        <div className="foto">
            <Link className="detalle" to={`/item/${props.id}`}>Ver detalle ... </Link>
        </div>
        <div>
          <div>
            <h3>{props.name}</h3>
          </div>
          <p>Quedan solo {props.stock} unidades!</p>
          <p><strong>$ {props.cost}</strong></p>
        </div>
      </div>
      <div>

        <ItemCount item={props} stock={props.stock} min={props.min}/>

      </div>
    </div>
  );
}

export default Item;