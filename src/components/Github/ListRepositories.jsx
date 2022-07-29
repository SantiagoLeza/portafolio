import React from 'react'
import Repo from './Repo'
import './ListRepositories.css'

function ListRepositories({repos}) {
  
  return (
    <div className='list'>
      {
        repos.map(repo => (
          <Repo repo={repo} key={repo.id} />
        ))
      }
    </div>
  )
}

export default ListRepositories