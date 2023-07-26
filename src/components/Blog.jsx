import React from 'react'
import { Link } from 'react-router-dom'

function Blog({blogs}) {
  return (
    blogs.map(blog=>(
      <div className='blog' key={blog.id}>
        <Link to={`blogs/${blog.id}`}>
            <h4>{blog.title}</h4>
            <h6>Author : {blog.author}</h6>
        </Link>
    </div>
    ))
  )
}

export default Blog