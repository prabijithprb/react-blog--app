import React from 'react'
import useFetch from './useFetch'
import { useNavigate, useParams } from 'react-router-dom'

function Viewblog() {
  
  const {id} = useParams()
  const {blogs,isPending,error} = useFetch('http://localhost:4000/blogs/'+id)
  const navigate = useNavigate()

  const handleClick = ()=>{
    fetch('http://localhost:4000/blogs/'+id,{
      method:'DELETE'
    }).then(()=>{
      navigate('/')
    })
  }

  return (
    
    <div className='header'>
      <div className='view-blog'>
      {isPending && <h1 className='loading'>Loading...</h1>}
      {error && <h1 className='loading'>{error}</h1>}
      {
        blogs && <div className='blog-details'>
          <h2>{blogs.title}</h2>
          <h4>{blogs.author}</h4>
          <p>{blogs.body}</p>
        </div>
      }

        <button className='blog-btn' onClick={handleClick}>Delete blog</button>
      </div>
    </div>
  )
}

export default Viewblog