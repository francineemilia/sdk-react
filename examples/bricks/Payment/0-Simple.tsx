import React from 'react';
import Payment from '../../../src/bricks/payment';

import initMercadoPago from '../../../src/mercadoPago/initMercadoPago';
import { PUBLIC_KEY } from '../../constants';

initMercadoPago(PUBLIC_KEY, { locale: 'pt-BR' });

const App = () => {
  const initialization = {
    amount: 100,
    preferenceId: '207446753-ea3adb2e-a4f2-41dd-a656-11cb01b8772c',
  };

  const customization = {
    paymentMethods: {
      atm: 'all',
      ticket: 'all',
      bankTransfer: ['pix'],
      creditCard: 'all',
      debitCard: 'all',
      mercadoPago: 'all',
    },
  };

  return (
    <Payment
      initialization={initialization}
      customization={customization}
      onSubmit={async (param) => {
        console.log(param);
      }}
    />
  );
};

export default App;
