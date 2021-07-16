import {combineReducers} from 'redux'
import latestMoviesReducer from './LatestMovieReducer'
import bookingReducer from './BookingReducer'

const rootReducer= combineReducers({

    latestMoviesReducer,
    bookingReducer,
})

export default rootReducer
