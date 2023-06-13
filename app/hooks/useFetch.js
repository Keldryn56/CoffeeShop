const { useState, useEffect } = require("react")

export default useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [errors, setErrors] = useState(null)
    const [page, setPage] = useState(0)

    const options = {
        method: 'GET'
    } 
    
    const fetchResults = () => fetch(url, options);
    const nextPage = () => setPage(prev => prev+1)
    const prevPage = () => setPage(prev => prev-1)

    useEffect(() => {
        let subscribed = true;

        fetchResults()
        .then((req) => subscribed ? req.json() : null)
        .then((results) => subscribed ? setData(results) : null)
        .catch(e => subscribed ? setErrors(e.message) : null) 
        .finally(() => subscribed ? setLoading(false) : null)

        return () => !subscribed;
    }, [page])

    return {
        errors,
        data,
        loading
    }
}