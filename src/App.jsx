import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Login from './Login/Login.jsx';
import MaterialList from './Material/MaterialList.jsx';
import teachingMaterial from './teachingMaterial.json';

const loggedIn = true;
const student = false;

const App = () => {
  return (
    <div className="App">
      {
        loggedIn ?
          <>
            <Header />
            <main className="container content d-flex flex-column justify-content-center">
              <MaterialList
                teachingMaterial={teachingMaterial}
                student={student}
              />
            </main>
            <Footer />
          </> :
          <>
            <main className="container"><Login /></main>
          </>
      }
    </div>
  );
}

export default App;