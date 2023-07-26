import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Addblog() {

  const navigate = useNavigate()
  const [blog,setBlog] = useState({
      "title": "",
      "body":"",
      "author":""
  })

  const handleChanges = (e)=>{
    const {name,value} = e.target
    setBlog({
      ...blog,[name]:value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    fetch('http://localhost:4000/blogs',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(blog)
    }
    ).then(()=>{
      navigate('/')
    })
  }

  return (
    <div className='header'>
      <div className='addblog'>
        <form className='blog-form' onSubmit={handleSubmit}>
          <label htmlFor='title'>Title</label><br/>
          <input  value ={blog.title} 
            className='input-box' type='text' name='title'
            onChange={handleChanges}
          /><br/>
          <label htmlFor='author'>Author</label><br/>
          <input value={blog.author} className='input-box'
           type='text' name='author'
           onChange={handleChanges}
           /><br/>
          <label htmlFor='blog-content'>Blog</label><br/>
          <textarea value={blog.body} name='body' 
          onChange={handleChanges}
          rows="10" className='input-box' type='text'/><br/>
          <button className='blog-btn' type='submit'>Add-blog</button>
        </form>
      </div> 
    </div>
  )
}

export default Addblog