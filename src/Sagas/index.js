import axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';


/***** Fetch Latest Movies *****/

function* fetchLatestMovies() {
  const json = yield axios.get('http://localhost:6700/latestmovies')
        .then(response => response.data )
  yield put({ type: "FETCH_LATESTMOVIES_SUCCESS", payload: json });
}


function* actionWatcher() {
     yield takeLatest('FETCH_LATESTMOVIES_BEGIN', fetchLatestMovies)

}

export default function* rootSaga() {
   yield all([
    actionWatcher()
])
}
