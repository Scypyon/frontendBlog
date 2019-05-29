export const SUM_ALL_COMMENTS = "addcomment:SUM_ALL_COMMENTS";

const sumAllComments = data => ({ type: SUM_ALL_COMMENTS, data });

export const sumComments = (comments, email,body) => async dispatch => {
  comments.push({email,body});
  dispatch(sumAllComments(comments));
};
