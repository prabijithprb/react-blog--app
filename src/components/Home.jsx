import Blog from './Blog'
import useFetch from './useFetch'

function Home() {

  const {blogs,isPending,error} = useFetch('http://localhost:4000/blogs')

  return (
    <div className='header'>
      <div className='home'>
        {error && <h5 className='loading'>{error}</h5>}
        {isPending && <h5 className='loading'>Loading....</h5>}
        {blogs && <Blog blogs={blogs}/>}
      </div>
    </div>
  )
}

export default Home