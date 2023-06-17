import React, {useState } from 'react';
import '../styles/product-list.scss';
import PRODUCT from '../models/proucts-data';
import Product from '../models/product';
import log from '../assets/images.jpeg'

function ProductsList() {

  const [product] = useState<Product[]>(PRODUCT);
  // useEffect()

  return (
    <div className='product-list'>
      {
        product.map((prod)=>(
          <div className='product' key={prod.id}>
            <div className='pic'>
              {
                prod.photo ? (<img src={prod.photo} alt="phot" />) 
                :(<img src={log} alt="phot" />)
              }
            </div>
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
