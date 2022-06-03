import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  MeWrapper, MeContent, MeContentColumn
} from './MeElements'
import MeNavigationComponent from './MeNavigation'
import MyReservations from './MyReservations'
import MyAccount from './MyAccount/MyAccount'
import AdminReservations from './AdminReservartions/AdminReservations'
import AdminVehicles from './AdminVehicles/AdminVehicles'

const Me = () => {
  const [shownSection, setShownSection] = useState('myAccount')

  const handleSectionChange = (section) => {
    setShownSection(section)
  }  

  return (
    <MeWrapper>
      <MeContent>
        <MeNavigationComponent shownSection={shownSection} sectionSwitch={handleSectionChange}/>
        <MeContentColumn>
          {shownSection === 'myAccount' && <MyAccount />}
          {shownSection === 'myReservations' && <MyReservations />}
          {shownSection === 'adminReservations' && <AdminReservations />}
          {shownSection === 'adminVehicles' && <AdminVehicles />}
          
        </MeContentColumn>
      </MeContent>
    </MeWrapper>
  )
}

export default Me