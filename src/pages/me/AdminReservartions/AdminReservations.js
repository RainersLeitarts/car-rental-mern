import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import ReservationCard from '../ReservationCard/ReservationCard'


//make this reusable
const AdminReservations = () => {
    const [reservations, setReservations] = useState()
    const axiosPrivate = useAxiosPrivate()
    const userId = useSelector(state => state.user.user.id)

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getMe = async () => {
            try {
                const response = await axiosPrivate.post('/reservations/allReservations')
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
        <div style={{width: '100%', overflowY: 'scroll'}}>{reservations?.reservations?.map((reservation, key) => {
            return <ReservationCard key={key} data={reservation}/>
        })}</div>
    )
}

export default AdminReservations