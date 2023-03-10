import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Countries from './components/Countries/Countries.js';
import Header from './components/Header/Header.js';
import Filter from './components/Filter/Filter.js';

function App() {
  return (
    <Router>
     <Header />
     <Filter />
     <Route exact path="/">
     <Countries />
     </Route>
     <Route path="/countries/:name" children={<Country />}></Route>
    </Router>
  );
}

export default App;
