import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Login from './Login/Login.jsx';
import MaterialList from './Material/MaterialList.jsx';
import Exercises from './Exercises/Exercises.jsx';
import Events from './Events/Events.jsx';
import SingleExercise from './Exercises/SingleExercise';
import SingleMaterial from './Material/SingleMaterial';
import teachingMaterial from './teachingMaterial.json';
import exercises from './exercises.json';

const logged_in = true;
const student = false;

// close hamburger navbar after opening new URL?

const App = () => {

  let mainContent;

  if (logged_in) {
    mainContent =
      <>
        <Header />
        <main className="container content d-flex flex-column justify-content-center">
          {/* IF COMPONENT WITHOUT PARAMETERS DO component={ComponentName} instead of render={() => ...}*/}
          <Switch>
            <Route path="/login" render={() =>
              <Login />
            } />
            <Route path="/material" render={() =>
              <MaterialList
                teachingMaterial={teachingMaterial}
                student={student}
              />
            } />
            <Route path="/exercises" render={() =>
              <Exercises
                exercises={exercises}
                student={student}
              />
            } />
            <Route path="/events" render={() =>
              <Events />
            } />
            <Route path="/single-material" render={() =>
              <SingleMaterial
                material={teachingMaterial}
              />
            } />
            <Route path="/single-exercise" render={() =>
              <SingleExercise />
            } />
            <Route path={`/exercises/:id`} render={() =>
              <SingleExercise />
            } />
          </Switch>
        </main>
        <Footer />
      </>
  } else {
    mainContent =
      <>
        <main className="container"><Login /></main>
      </>
  }

  return (
    <div className="App">
      {mainContent}
    </div >
  );
}

export default App;