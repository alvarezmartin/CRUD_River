import React,{ Fragment } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Arqueros from './components/Arqueros/Arqueros';
import Defensores from './components/Defensores/Defensores';
import Mediocampistas from './components/Mediocampistas/Mediocampistas';
import Delanteros from './components/Delanteros/Delanteros';
import Cuerpotecnico from './components/Cuerpotecnico/Cuerpotecnico';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Arqueros/>
        <Defensores/>
        <Mediocampistas/>
        <Delanteros/>
        <Cuerpotecnico/>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
