import { GET_PHOTO_ID, REMOVE_PHOTO } from '../constants';

export const getPhotoId = (id) => ({
  type: GET_PHOTO_ID,
  id,
})


export const removePhoto = (id) => ({
  type: REMOVE_PHOTO,
  id,
});