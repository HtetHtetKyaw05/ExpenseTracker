import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExpenseTracker from './expenseTracker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<ExpenseTracker />} />
            <Route path='*' element={<main style={{ padding: '1rem' }}>
                  <p>There&apos;s nothing here! </p>
                </main>
            }/>
          </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('contents'),
);
