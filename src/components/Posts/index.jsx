import React, { useState } from "react";
import styled from "styled-components";
import Comments from "../Comments";

import { connect } from "react-redux";
import { fetchComments } from "../../store/actions/commentsAction";

const Post = styled.div`
  border-bottom: 1px solid black;
  width: 70vw;
  margin: 0 auto;
  h1 {
    font-size: 1.25em;
  }
  p {
    font-size: 0.8em;
  }
`;

function Posts({ post, fetchComments }) {
  const [displayComments, setDisplayComments] = useState("none");

  const CheckDisplayComments = (value, fetch) => {
    if (value === "none") setDisplayComments("block");
    else setDisplayComments("none");
    fetchComments(post.id);
  };
  return (
    <Post>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => CheckDisplayComments(displayComments, fetch)}>
        Pokaż komentarze
      </button>
      {displayComments !== "none" && (
        <div>
          <Comments idpost={post.id} />
        </div>
      )}
    </Post>
  );
}

const mapStateToProps = state => ({
  comments: state.comments.comments,
  error: state.comments.error,
  isFetching: state.comments.isFetching
});
const mapDispatchToProps = dispatch => ({
  fetchComments: idpost => dispatch(fetchComments(idpost))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
