import { useEffect,useState } from "react"

const useFetch = (url)=>{
    const [blogs,setBlogs] = useState()
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState()

    const abortFetch = new AbortController();


    useEffect(()=>{
        fetch(url,{signal : abortFetch.signal}).then(res=>{
            if(!res.ok){
            throw new Error("Response can't fetch")
            }
            return res.json()
        }).then(data =>{
            setBlogs(data)
            setIsPending(false)
            setError(null)
        }).catch(err=>{
            if(err.name === 'AbortError'){
                console.log('Fetch cancelled')
            }else{
                setIsPending(false)
                setError(err.message)
            }
        })
    },[])
    return {blogs,isPending,error}
}

export default useFetch