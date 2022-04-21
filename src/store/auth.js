import { createSlice } from '@reduxjs/toolkit'

const initialLoginState = { loggedIn: false, user: null }

const loginSlice = createSlice({
    name: 'login',
    initialState: initialLoginState,
    reducers: {
        setTrue(state, action) {
            state.loggedIn = true
            state.user = action.payload.user
        },
        setFalse(state) {
            state.loggedIn = false
            state.user = null
        }
    }
})

export const loginActions = loginSlice.actions
export default loginSlice.reducer