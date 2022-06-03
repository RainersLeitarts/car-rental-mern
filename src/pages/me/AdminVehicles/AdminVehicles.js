import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import { Card, DataWrapper, DateCol, DateTitle, DateValue, DateWrapper, Heading, Image, PaymentStatus, ShowUser } from './AdminVehiclesElements'

const AdminVehicles = ({data}) => {
  const [vehicles, setVehicles] = useState()
    const axiosPrivate = useAxiosPrivate()
    const userId = useSelector(state => state.user.user.id)

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getMe = async () => {
            try {
                const response = await axiosPrivate.get('/cars')
                console.log('this: ' + response.data)
                isMounted && setVehicles(response.data)
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
      <div style={{width: '100%', overflowY: 'scroll'}}>{vehicles?.map((vehicle, key) => {
          return <Card>
          <Image url={vehicle?.images}/>
          <DataWrapper>
            <Heading>{`${vehicle?.make} ${vehicle?.model} ${vehicle?.year}`}</Heading>
          </DataWrapper>
        </Card>
      })}</div>
  )
}

export default AdminVehicles