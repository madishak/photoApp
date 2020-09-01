import { ADD_PHOTOS, REMOVE_PHOTO, PHOTOS_FETCH_REQUEST, PHOTOS_FETCH_SUCCESS, PHOTOS_FETCH_FAILURE } from '../constants';

export const addPhotos = (photos) => ({
  type: ADD_PHOTOS,
  photos,
});

export const removePhoto = (id) => ({
  type: REMOVE_PHOTO,
  id,
});

export const photosFetchedRequest = () => ({
  type: PHOTOS_FETCH_REQUEST,
});

export const photosFetchedSucces = (photos) => ({
  type: PHOTOS_FETCH_SUCCESS,
  photos,
});

export const photosFetchedFailure = (message) => ({
  type: PHOTOS_FETCH_FAILURE,
  message,
});