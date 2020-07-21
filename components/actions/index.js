export const addPhotos = (photos) => ({
  type: "ADD_PHOTOS",
  photos,
});

export const removePhoto = (id) => ({
  type: "REMOVE_PHOTO",
  id,
});
