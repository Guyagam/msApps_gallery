export const GALLERY_ACTIONS = {
  SET_PHOTOS: "SET_PHOTOS",
  NEXT_PAGE: "NEXT_PAGE",
  PREV_PAGE: "PREV_PAGE",
  SET_CATEGORY: "SET_CATEGORY",
  SET_SORT_BY: "SET_SORT_BY",
};

const initialState = {
  photos: [],
  page: 1,
  category: "flowers",
  sortBy: "id",
};

export function galleyReducer(state = initialState, action) {
  switch (action.type) {
    case GALLERY_ACTIONS.SET_PHOTOS:
      return { ...state, photos: action.photos };
    case GALLERY_ACTIONS.SET_CATEGORY:
      return { ...state, category: action.category };
    case GALLERY_ACTIONS.SET_SORT_BY:
      return { ...state, sortBy: action.sortBy };
    case GALLERY_ACTIONS.NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case GALLERY_ACTIONS.PREV_PAGE:
      return { ...state, page: state.page - 1 };
    default:
      return state;
  }
}
