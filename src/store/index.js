import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './auth'
import shownCarsReducer from './shownCars'

const store = configureStore({
    reducer: {
        login: loginReducer,
        shownCars: shownCarsReducer
    }
})

export default store