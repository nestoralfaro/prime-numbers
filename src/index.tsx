//Nestor Alfaro 04/07/2022
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrimeTable from './PrimeTable';

ReactDOM.render(
  <React.StrictMode>
    {/* PrimeTable defaults to 10*10, however you may also specify its size through the rows and cols attributes*/}
    {/* <PrimeTable rows={10} cols={10}/> */}
    <PrimeTable />
  </React.StrictMode>,
  document.getElementById('root')
);