import React from 'react'
import { Badge } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'

function Widget() {
    return (
        <>
          <FaShoppingCart size='1.5rem'/>
          <Badge pill bg="danger">
            Carrito
          </Badge>
        </>
    )
}
export default Widget