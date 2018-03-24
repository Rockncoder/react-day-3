import React from 'react';
import TKAppbar from '../components/TK-Appbar';

export const withAppbar = Wrapped => props => (
  <div className='wrapper'>
    <TKAppbar/>
    <div className='container'>
      <Wrapped {...props} />
    </div>
  </div>
);
