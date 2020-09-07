import { ADD_PHOTOS } from '../constants';

export const addPhotos = (photos) => ({
    type: ADD_PHOTOS,
    photos,
  });