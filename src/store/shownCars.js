import { createSlice } from '@reduxjs/toolkit'

const initialShownCarsState = {  }

const shownCarsSlice = createSlice({
    name: 'shownCars',
    initialState: initialShownCarsState,
    reducers:{
        updateCars(state, action){
            state.user = action.payload.user
        },
        setTrue(state, action) {
            
        },
    }
})

export const shownCarsActions = shownCarsSlice.actions
export default shownCarsSlice.reducer