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
import SingleMaterial from './Material/SingleMaterial';


const logged_in = true;
const student = false;

// close hamburger navbar after opening new URL?

const App = () => {
  return (
    <div className="App">
      {
        logged_in ?
          <>
            <Header />
            <main className="container content d-flex flex-column justify-content-center">
              <Switch>
                <Route path="/login" render={() => (
                  <Login />
                )} />
                <Route path="/material" render={() => (
                  <MaterialList
                    teachingMaterial={teachingMaterial}
                    student={student}
                  />
                )} />
                <Route path="/exercises" render={() => (
                  <Exercises
                    exercises={exercises}
                    student={student}
                  />
                )} />
                <Route path="/events" render={() => (
                  <Events />
                )} />
                <Route path="/single-material" render={() => (
                  <SingleMaterial
                    material={teachingMaterial}
                  />
                )} />
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