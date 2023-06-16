import React, { useState } from 'react';
import '../styles/comm-list.scss'
import Comm from '../models/comm';
import COMM from '../models/comm-data';

function CommList() {

  var [comm ] = useState<Comm[]>(COMM);
  return (
    <div className='comm-list'>
      {
        comm.map((com,index)=>(
          <div className='comm-card'>
            <div className='cover'></div>
            <h3>{com.title}</h3>
            <span>{com.type}</span>
            <br />
            <small>{com.price}</small>
          </div>
        ))
      }
    </div>
  );
}

export default CommList;
