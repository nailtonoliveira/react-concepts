import React, { useState } from 'react';

import Header from './components/Header';

import './App.css'
import bg from './assets/woman.jpeg';

function App () {
  const [projects, setProjects] = useState(['Development app', 'Frontend app']);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`])

    console.log(projects);
  }

  return (
  <>
    <Header title="Projects">

      <img width={300} src={bg} />
      
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
    </Header>

    <button type="button" onClick={handleAddProject}>Add project</button>
  </>
  );
}

export default App;