import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  MeWrapper, MeContent, MeContentColumn
} from './MeElements'
import MeNavigationComponent from './MeNavigation'
import MyAccount from './MyAccount'
import MyReservations from './MyReservations'

const Me = () => {
  const [shownSection, setShownSection] = useState('myAccount')
  const axiosPrivate = useAxiosPrivate()

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
          
        </MeContentColumn>
      </MeContent>
    </MeWrapper>
  )
}

export default Me