import {
  CREATE,
  DELETE,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  LIKE,
  UPDATE,
} from "../constants/actionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case DELETE:
      return state.filter((post) => post._id !== action.payload);

    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };

    case CREATE:
      return [...state, action.payload];

    case LIKE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case UPDATE:
      return state.map((post) =>
        post.id === action.payload._id ? action.payload : post
      );
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default reducer;
