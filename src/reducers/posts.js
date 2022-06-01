import {
  CREATE,
  DELETE,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  LIKE,
  UPDATE,
} from "../constants/actionTypes";

const reducer = (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);

    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...posts, action.payload];

    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case UPDATE:
      return posts.map((post) =>
        post.id === action.payload._id ? action.payload : post
      );
    case FETCH_BY_SEARCH:
      return action.payload;
    default:
      return posts;
  }
};

export default reducer;
