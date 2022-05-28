import React from 'react'
import {
    MeNavigation, MeNavigationItem,
    MeNavigationItemText
} from './MeElements'

const MeNavigationComponent = ({shownSection, sectionSwitch}) => {

    return (
        <MeNavigation>
            <MeNavigationItem active={shownSection === 'myAccount'? true : false} onClick={() => sectionSwitch('myAccount')}>
                <MeNavigationItemText>
                    My Account
                </MeNavigationItemText>
            </MeNavigationItem>
            <MeNavigationItem active={shownSection === 'myReservations'? true : false} onClick={() => sectionSwitch('myReservations')}>
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