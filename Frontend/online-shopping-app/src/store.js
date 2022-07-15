import { configureStore } from '@reduxjs/toolkit'
import reducer from './Reducers/reducer'

export default configureStore({
    reducer: reducer,
    
})