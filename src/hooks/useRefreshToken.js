import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "../api/axios"
import { userActions } from "../store/user"

const useRefreshToken = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()

    const refresh = async () => {
        try {
            const response = await axios.get('users/refresh', {
                withCredentials: true
            })

            dispatch(userActions.refreshAccessToken(response.data.accessToken))

            return response.data.accessToken
        } catch (error) {
            
            dispatch(userActions.removeUser())
            navigator('/login')

        }
    }

    return refresh
}

export default useRefreshToken