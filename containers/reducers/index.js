import { combineReducers } from "redux";
import { ADD_PHOTOS, REMOVE_PHOTO, PHOTOS_FETCH_SUCCESS, PHOTOS_FETCH_FAILURE } from '../constants';

const photos = (state = [], action) => {
  switch (action.type) {
    case ADD_PHOTOS: {
      const { photos } = action;
      // console.log(photos);
      return [...photos, ...state];
    }
    case REMOVE_PHOTO: {
      const { id } = action;
      return state.filter((photo) => photo.id !== id);
    }
    case PHOTOS_FETCH_SUCCESS: {
      const { photos } = action;
      return [...photos, ...state];
    }
    case PHOTOS_FETCH_FAILURE: {
      const { message } = action;
      return message;
    }
    default:
      return state;
  }
};

export default combineReducers({ photos });
