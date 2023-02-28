import React from 'react';
import Countries from './components/Countries/Countries.js';
import Header from './components/Header/Header.js';
import Filter from './components/Filter/Filter.js';

function App() {
  return (
    <>
     <Header />
     <Filter />
     <Countries />
    </>
  );
}

export default App;
