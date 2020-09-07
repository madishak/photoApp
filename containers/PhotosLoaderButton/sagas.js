import { uniqueId } from "lodash";
import axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
import { PHOTOS_FETCH_REQUEST, PHOTOS_FETCH_SUCCESS, PHOTOS_FETCH_FAILURE } from '../constants';

function* getPhotos() {
  try {
    const response = yield call(
      axios.get,
      `https://api.unsplash.com/photos/random/?client_id=I-2oQQW0voU3M5j5jPUt_O8edXadaHayvzKSz1ZiPxE&&count=5&&query=city`
    );
    const data = yield response.data;
    const thumbs = yield data.map(({ urls, user, alt_description }) => ({
      id: uniqueId(),
      name: user.name,
      file: urls.thumb,
      description: alt_description,
    }));
    yield put({ type: PHOTOS_FETCH_SUCCESS, photos: thumbs });
  } catch (error) {
    yield put({ type: PHOTOS_FETCH_FAILURE, message: error });
  }
}

function* getPhotosWatcher() {
  yield takeEvery(PHOTOS_FETCH_REQUEST, getPhotos);
}

export default function* rootSaga() {
  yield all([getPhotosWatcher()]);
}
