import {
  CREATE,
  DELETE,
  END_LOADING,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  LIKE,
  START_LOADING,
  UPDATE,
} from "../constants/actionTypes";

const reducer = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };

    case END_LOADING:
      return { ...state, isLoading: false };

    case DELETE:
      return {
        ...state,
        posts: state.filter((post) => post._id !== action.payload),
      };

    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };

    case CREATE:
      return { ...state, posts: [...state, action.payload] };

    case LIKE:
      return {
        ...state,
        posts: state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    case UPDATE:
      return {
        ...state,
        posts: state.map((post) =>
          post.id === action.payload._id ? action.payload : post
        ),
      };

    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default reducer;
