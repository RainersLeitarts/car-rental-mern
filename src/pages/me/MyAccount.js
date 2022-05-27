import { useEffect, useState } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'


const MyAccount = () => {
    const [user, setUser] = useState()
    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getMe = async () => {
            try {
                const response = await axiosPrivate.get('/users/me',
                    { signal: controller.signal })
                console.log(response.data)
                isMounted && setUser(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        getMe()

        return () => {
            isMounted = false
            controller.abort()
        }
    }, [])

    return (
        <div>{user?._id}</div>
    )
}

export default MyAccount