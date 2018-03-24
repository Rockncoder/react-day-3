import React from 'react';
import TKLayout from '../components/TK-Layout';
import CssBaseline from 'material-ui/CssBaseline';

export const withLayout = Wrapped => props => (
  <div className='wrapper'>
    <TKLayout>
      <CssBaseline />
      <Wrapped {...props} />
    </TKLayout>
  </div>
);
