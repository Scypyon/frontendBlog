import {
  IS_FETCHING,
  FETCHING_FAILED,
  FETCHING_SUCCEED
} from "../actions/commentsAction";

import { SUM_ALL_COMMENTS } from "../actions/sumCommentsAction";

const initState = {
  allComments: [],
  error: "",
  isFetching: false
};

export const commentsReducer = (state = initState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, isFetching: true };
    case FETCHING_SUCCEED:
      return {
        ...state,
        allComments: {
          ...state.allComments,
          [action.idpost]: action.data
        },
        isFetching: false,
        error: ""
      };
    case FETCHING_FAILED:
      return { ...state, error: "Coś poszło nie tak", isFetching: false };
    case SUM_ALL_COMMENTS:
      return {
        ...state,
        comments: action.data
      };
    default: {
      return state;
    }
  }
};
