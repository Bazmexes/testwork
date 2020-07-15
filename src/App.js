import React from 'react';
import './App.scss';
import FormAdd from './componets/FormAdd/FormAdd'
import WrapTasks from './componets/WrapTasks/WrapTasks';
function App() {
  return (
    <div className="App">
      <div className="container">
        <FormAdd/>
        <WrapTasks/>
      </div>
    </div>
  );
}

export default App;
