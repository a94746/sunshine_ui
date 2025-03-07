import { useState, useEffect } from 'react';

export default function useFetch<T>(fetchFunction: () => Promise<T>, dependency: any) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        async function fetchData(){
            setLoading(true)
            setError(null)
            try {
                const result = await fetchFunction()
                setData(result)
            } catch (error) {
                setError(error as Error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [fetchFunction, dependency])

    return { data, loading, error }
}
