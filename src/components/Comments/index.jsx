import React, {memo} from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import AddComment from "../AddComment";

const OneComment = styled.div`
  font-size: 1em;
  color: gray;
  border-bottom: 1px solid gray;
  margin-bottom: 0.4em;
  h4,
  p {
    margin: 0;
  }
`;

function Comments({ isFetching, allComments }) {
  console.log("Komentarze: ", allComments);
  return (
    <>
      {isFetching ? (
        <p>Wczytuję komentarze...</p>
      ) : (
        <>
          {allComments.map((comment, i) => (
            <OneComment key={i}>
              <h4>{comment.email}</h4>
              <p>{comment.body}</p>
            </OneComment>
          ))}
          <AddComment />
        </>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  error: state.comments.error,
  isFetching: state.comments.isFetching,
  allComments: state.comments.allComments
});
export default connect(mapStateToProps)(memo(Comments));
