import { useEffect, useState } from 'react'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import { InfoTextfield, Wrapper, InputLabel, Row1, Row2, Role } from './MyAccountElements'

const MyAccount = () => {
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
        <Wrapper>
            <Row1>
                <InputLabel>
                    Name
                    <InfoTextfield value={user?.name} readOnly />
                </InputLabel>
                <InputLabel>
                    Surname
                    <InfoTextfield value={user?.surname} readOnly />
                </InputLabel>
                <InputLabel>
                    Nickname
                    <InfoTextfield value={user?.username} readOnly />
                </InputLabel>
            </Row1>
            <Row2>
                <InputLabel>
                    E-mail
                    <InfoTextfield value={user?.email} readOnly />
                </InputLabel>
            </Row2>
            <Role>Admin: {user?.role === 'admin'? 'true' : 'false'}</Role>
        </Wrapper>
    )
}

export default MyAccount