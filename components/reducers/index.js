import { combineReducers } from "redux";

const photos = (state = [], action) => {
  switch (action.type) {
    case "ADD_PHOTOS": {
      const { photos } = action;
      // return { photos, ...state }
      console.log(photos);
      return [...photos];
    }
    case "REMOVE_PHOTO": {
      const { id } = action;
      return state.filter((photo, ind) => ind !== id);
    }
    default:
      return state;
  }
};

export default combineReducers({ photos });
