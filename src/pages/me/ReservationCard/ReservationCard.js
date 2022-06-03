import React from 'react'
import { Card, Heading, DateWrapper, DateCol, DateTitle,
  DateValue, Image, DataWrapper, PaymentStatus, ShowUser } from './ReservationCardElements'

const ReservationCard = ({ showUser, data }) => {

  const formatDate = (dateString) => {
    const date = Date.parse(dateString)
    const newDate = new Date(date)
    const day = newDate.getDate()

    const month = newDate.getMonth()
    const year = newDate.getFullYear()
    return (`${('0' + day).slice(-2)}/${('0' + month).slice(-2)}/${year}`)
  }

  return (
    <Card>
      <Image url={data.vehicleImage}/>
      <DataWrapper>
        <Heading>{`${data.vehicleMake} ${data.vehicleModel} ${data.vehicleYear}`}</Heading>
        <DateWrapper>
          <DateCol>
            <DateTitle>Pickup Date:</DateTitle>
            <DateValue>{formatDate(data.startDate)}</DateValue>
          </DateCol>
          <DateCol>
            <DateTitle>Return Date:</DateTitle>
            <DateValue>{formatDate(data.endDate)}</DateValue>
          </DateCol>
        </DateWrapper>
        {showUser && <ShowUser>From: {data.userId}</ShowUser>}
        <PaymentStatus>Payment: {data.paymentStatus}</PaymentStatus>
      </DataWrapper>
    </Card>

  )
}

export default ReservationCard