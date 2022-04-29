import { createSlice } from '@reduxjs/toolkit'

const initialShownCarsState = {shownCars: null}

const shownCarsSlice = createSlice({
    name: 'shownCars',
    initialState: initialShownCarsState,
    reducers:{
        updateCars(state, action){
            state.shownCars = action.payload
        }
    }
})

export const shownCarsActions = shownCarsSlice.actions
export default shownCarsSlice.reducer