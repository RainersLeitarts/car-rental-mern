import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import shownCarsReducer from './shownCars'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage
}

const reducers = combineReducers({
    user: userReducer,
    shownCars: shownCarsReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export default store