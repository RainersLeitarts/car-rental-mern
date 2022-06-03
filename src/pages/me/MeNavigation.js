import React, { useEffect, useState } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import {
    MeNavigation, MeNavigationItem,
    MeNavigationItemText
} from './MeElements'

const MeNavigationComponent = ({ shownSection, sectionSwitch }) => {

    //make this persist
    const [user, setUser] = useState()
    const axiosPrivate = useAxiosPrivate()

    //put this in a hook
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
    //

    return (
        <MeNavigation>
            <MeNavigationItem active={shownSection === 'myAccount' ? true : false} onClick={() => sectionSwitch('myAccount')}>
                <MeNavigationItemText>
                    My Account
                </MeNavigationItemText>
            </MeNavigationItem>
            {user?.role === 'user' &&
                <MeNavigationItem active={shownSection === 'myReservations' ? true : false} onClick={() => sectionSwitch('myReservations')}>
                    <MeNavigationItemText>
                        My Reservations
                    </MeNavigationItemText>
                </MeNavigationItem>
            }
            {/* <MeNavigationItem>
                <MeNavigationItemText>
                    Payment Methods
                </MeNavigationItemText>
            </MeNavigationItem> */}
            {user?.role === 'admin' &&
                <MeNavigationItem active={shownSection === 'adminReservations' ? true : false} onClick={() => sectionSwitch('adminReservations')}>
                    <MeNavigationItemText>
                        Admin Reservations
                    </MeNavigationItemText>
                </MeNavigationItem>
            }
            {user?.role === 'admin' &&
                <MeNavigationItem active={shownSection === 'adminVehicles' ? true : false} onClick={() => sectionSwitch('adminVehicles')}>
                    <MeNavigationItemText>
                        Admin Vehicles
                    </MeNavigationItemText>
                </MeNavigationItem>
            }
        </MeNavigation>
    )
}

export default MeNavigationComponent