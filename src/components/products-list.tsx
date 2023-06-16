import React, {useState } from 'react';
import '../styles/product-list.scss';
import PRODUCT from '../models/comm-data';
import Product from '../models/produict';

function ProductsList() {

  const [product]=useState<Product[]>(PRODUCT);
  // useEffect()

  return (
    <div className='product-list'>
      {
        product.map((prod)=>(
          <div className='product'>
            <div className='pic'></div>
            <h4>{prod.title}</h4>
            <span>{prod.type}</span>
            <br />
            <small>A {prod.price}</small>
          </div>
        ))
        
      }
    </div>
  );
}

export default ProductsList;
