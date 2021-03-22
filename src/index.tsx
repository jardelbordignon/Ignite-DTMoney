import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'

import { App } from './App';

createServer({
  routes() {
     this.get('/transactions', () => {
      return [
        {
          id: 'uuid-a1',
          title: 'Pagamento financiamento',
          amount: 600,
          type: 'withdraw',
          category: 'Fixas mensais',
          created_at: new Date()
        },
        {
          id: 'uuid-a2',
          title: 'Salário',
          amount: 3000,
          type: 'deposit',
          category: 'Trabalho',
          created_at: new Date()
        },
        {
          id: 'uuid-a3',
          title: 'Verda carro',
          amount: 10000,
          type: 'deposit',
          category: 'extras',
          created_at: new Date()
        },
        {
          id: 'uuid-a4',
          title: 'Pagamento agua e luz',
          amount: 400,
          type: 'withdraw',
          category: 'Fixas mensais',
          created_at: new Date()
        },
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
