import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelencer de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          created_at: new Date("2021-03-10 09:00:00")
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Apartamento',
          amount: 600,
          created_at: new Date("2021-03-20 10:00:00")
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      data.created_at = new Date()
      
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
