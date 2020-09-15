import React from 'react';
import './App.scss';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Login from './Login/Login.jsx';
import MaterialList from './Material/MaterialList.jsx';
// import teachingMaterial from './teachingMaterial.json';
import ExerciseList from './Exercises/ExerciseList.jsx';
import exercises from './exercises.json';

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

              <ExerciseList
                exercises={exercises}
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