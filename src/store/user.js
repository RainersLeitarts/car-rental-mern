import { createSlice } from '@reduxjs/toolkit'

const initialLoginState = { user: {} }

const userSlice = createSlice({
    name: 'user',
    initialState: initialLoginState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        removeUser(state) {
            state.user = {}
        }
    }
})

export const userActions = userSlice.actions
export default userSlice.reducer