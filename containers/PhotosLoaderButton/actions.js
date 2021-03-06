import {
  PHOTOS_FETCH_REQUEST,
  PHOTOS_FETCH_SUCCESS,
  PHOTOS_FETCH_FAILURE,
} from "../constants";

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
