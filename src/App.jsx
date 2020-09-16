import React from 'react';
import './App.scss';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Login from './Login/Login.jsx';
import MaterialList from './Material/MaterialList.jsx';
import teachingMaterial from './teachingMaterial.json';
import Exercises from './Exercises/Exercises.jsx';
import Events from './Events/Events';
import exercises from './exercises.json';
import { Route, Switch } from 'react-router-dom';


const logged_in = true;
const student = false;

const App = () => {

  return (
    <div className="App">

      {
        logged_in ?
          <>
            <Header />
            <main className="container content d-flex flex-column justify-content-center">
              <Switch>
                <Route path="/exercises" render={() => {
                  return (
                    <Exercises
                      exercises={exercises}
                      student={student}
                    />
                  )
                }} />
                <Route path="/events" render={() => {
                  return (
                    <Events />
                  )
                }} />
                <Route path="/login" render={() => {
                  return (
                    <Login />
                  )
                }} />

              </Switch>


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