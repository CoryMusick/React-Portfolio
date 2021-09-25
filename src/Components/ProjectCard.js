import React from 'react';
import "./ProjectCard.css";


const ProductCard = (props) => {
  const repo = props.repo;
  // create github page link
  // to do take {username} from .env to be usable by anyone
  const repoPageLink = "https://corymusick.github.io/"+repo.name;
  const lastUpdate = repo.updated_at.split("T")[0];

  return(
  <div className='project-card'>
    <h2>{repo.name}</h2>
    <div className="pc-content">
      <div className="pc-description">
        <p>{repo.description}</p>
      </div>
      <div className="pc-links">
        <a className="link" href={repo.html_url} target="_blank" rel="noreferrer">Repo Link</a>
        <a className="link" href={repoPageLink} target="_blank" rel="noreferrer">Page Link</a>
      </div> 
    </div>
    <div className="pc-lastUpdate">
      <p>Last Update: {lastUpdate}</p>
    </div>
     
  </div>
  )}

export default ProductCard;