import axios from "axios";

export const IS_FETCHING = "comments:IS_FETCHING";
export const FETCHING_SUCCEED = "comments:FETCHING_SUCCEED";
export const FETCHING_FAILED = "comments:FETCHING_FAILED";

const isFetching = { type: IS_FETCHING };
const fetchingSucceed = (data, idpost) => ({
  type: FETCHING_SUCCEED,
  data,
  idpost
});
const fetchingFailed = error => ({ type: FETCHING_FAILED, error });

export const fetchComments = idpost => {
  return async (dispatch, getState) => {
    const state = getState();
    if (!state.comments.allComments[idpost]) {
      try {
        dispatch(isFetching);
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments?postId=" + idpost
        );
        dispatch(fetchingSucceed(data, idpost));
      } catch (error) {
        dispatch(fetchingFailed(error));
      }
    }
  };
};
