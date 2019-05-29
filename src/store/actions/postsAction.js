import axios from "axios";

export const IS_FETCHING = "posts:IS_FETCHING";
export const FETCHING_SUCCEED = "posts:FETCHING_SUCCEED";
export const FETCHING_FAILED = "posts:FETCHING_FAILED";

const isFetching = { type: IS_FETCHING };
const fetchingSucceed = data => ({ type: FETCHING_SUCCEED, data });
const fetchingFailed = error => ({ type: FETCHING_FAILED, error });

export const fetchPosts = async dispatch => {
  try {
    dispatch(isFetching);
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(fetchingSucceed(data));
  } catch (error) {
    dispatch(fetchingFailed(error));
  }
};
