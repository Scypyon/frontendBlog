export const SUM_ALL_COMMENTS = "addcomment:SUM_ALL_COMMENTS";

const sumAllComments = (data,email,body) => ({ type: SUM_ALL_COMMENTS, data,email,body });

export const sumComments = (allComments, email, body) => async dispatch => {
  dispatch(sumAllComments(allComments, email, body));
};
