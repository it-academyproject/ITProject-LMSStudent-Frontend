import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login.jsx';

const logged_in = true;

const App = () => {

  return (
    <div className="App">
      {
        logged_in ?
          <>
            <Header />
            <main className="container content"></main>
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