import React from 'react'
import {
    MeNavigation, MeNavigationItem,
    MeNavigationItemText
} from './MeElements'

const MeNavigationComponent = ({sectionSwitch}) => {


    return (
        <MeNavigation>
            <MeNavigationItem onClick={() => sectionSwitch('myAccount')}>
                <MeNavigationItemText>
                    My Account
                </MeNavigationItemText>
            </MeNavigationItem>
            <MeNavigationItem onClick={() => sectionSwitch('myReservations')}>
                <MeNavigationItemText>
                    My Reservations
                </MeNavigationItemText>
            </MeNavigationItem>
            <MeNavigationItem>
                <MeNavigationItemText>
                    Payment Methods
                </MeNavigationItemText>
            </MeNavigationItem>
            <MeNavigationItem>
                <MeNavigationItemText>
                    Admin Reservations
                </MeNavigationItemText>
            </MeNavigationItem>
            <MeNavigationItem>
                <MeNavigationItemText>
                    Admin Vehicles
                </MeNavigationItemText>
            </MeNavigationItem>
        </MeNavigation>
    )
}

export default MeNavigationComponent