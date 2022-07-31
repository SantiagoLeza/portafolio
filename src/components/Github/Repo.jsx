import React from 'react'
import './Repo.css'

function Repo({repo}) {
  
    return (
    <div className='repo'>
        <a className='card' href={repo.html_url} target='_blank' rel="noreferrer">
            <div className='repo-visibility'><p>{repo.visibility}</p></div>
            <p className='repo-name'>{repo.name}</p>
            <p className='repo-description'>{repo.description}</p>
            <p className='language'>{repo.language}</p>
        </a>
    </div>
  )
}

export default Repo