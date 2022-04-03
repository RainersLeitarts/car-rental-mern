import axios from 'axios';
import { useCallback, useState } from 'react';

const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const sendRequest = useCallback(async (requestConfig, callback = () => { }) => {
        setLoading(false)
        setError(null)

        try {
            setLoading(true)

            const response = await axios(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'get',
                data: requestConfig.data ? requestConfig.data : null,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.data
            callback(data)

        } catch (e) {
            setError(e)
            console.log(e)
        }
        setLoading(false)
    }, [])

    return { loading, error, sendRequest }
};

export default useHttp;