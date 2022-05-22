import { useDispatch } from "react-redux"
import axios from "../api/axios"
import { userActions } from "../store/user"

const useRefreshToken = () => {
    const dispatch = useDispatch()
    
    const refresh = async () => {
        const response = await axios.get('users/refresh', {
            withCredentials: true
        })
        console.log(response)
        dispatch(userActions.refreshAccessToken(response.data.accessToken))

        return response.data.accessToken
    }

    return refresh
}

export default useRefreshToken