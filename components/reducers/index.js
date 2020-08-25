import { combineReducers } from "redux";

const photos = (state = [], action) => {
  switch (action.type) {
    case "ADD_PHOTOS": {
      const { photos } = action;
      console.log(photos);
      return [...photos, ...state];
    }
    case "REMOVE_PHOTO": {
      const { id } = action;
      return state.filter((photo) => photo.id !== id);
    }
    default:
      return state;
  }
};

export default combineReducers({ photos });
