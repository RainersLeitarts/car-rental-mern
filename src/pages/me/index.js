import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  MeWrapper, MeContent, MeContentColumn
} from './MeElements'
import MeNavigationComponent from './MeNavigation'
import MyAccount from './MyAccount'

const Me = () => {
  const [shownSection, setShownSection] = useState('myAccount')
  const axiosPrivate = useAxiosPrivate()

  

  return (
    <MeWrapper>
      <MeContent>
        <MeNavigationComponent />
        <MeContentColumn>
          <MyAccount />
        </MeContentColumn>
      </MeContent>
    </MeWrapper>
  )
}

export default Me