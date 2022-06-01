import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import ReservationCard from './ReservationCard/ReservationCard'


const MyReservations = () => {
    const [reservations, setReservations] = useState()
    const axiosPrivate = useAxiosPrivate()
    const userId = useSelector(state => state.user.user.id)

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getMe = async () => {
            try {
                const response = await axiosPrivate.post('/reservations/myReservations',
                    {
                        userId: userId
                    })
                console.log(response.data)
                isMounted && setReservations(response.data)
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
        <div style={{width: '100%'}}>{reservations?.reservations?.map((reservation, key) => {
            return <ReservationCard key={key} data={reservation}/>
        })}</div>
    )
}

export default MyReservations