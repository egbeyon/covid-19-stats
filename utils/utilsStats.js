import  { useState, useEffect } from 'react';

 export default function useStats(url) {
    const [stats, setStats] = useState();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            setLoading(false);
            setError();
            console.log('fetching data');

            const data = await fetch(url).then(res => res.json())
            .catch(err => {
                setError();
            });
            
            setStats(data);
            setLoading(true);
        }
        fetchData();
    }, [url]);
    return {
        stats,
        loading,
        error,
    };
}