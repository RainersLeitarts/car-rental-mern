import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loginReducer from './auth'
import shownCarsReducer from './shownCars'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage
}

const reducers = combineReducers({
    login: loginReducer,
    shownCars: shownCarsReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export default store