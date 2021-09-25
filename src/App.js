import React from 'react';
import './App.css';
import ProjectCard from './Components/ProjectCard';
import repoData from './Repos.json';


function App() {

  const repoGenerator = () => repoData.map((repo) => {
   return <ProjectCard key={repo.id} repo={repo} />
  })
  
  return repoGenerator()
}

export default App;
