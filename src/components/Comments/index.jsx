import React, { memo, useState, useEffect } from "react";
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
  const [comments, setComments] = useState();

  useEffect(() => {
    if (isFetching === false) setComments(allComments);
  }, [allComments]);

  const addRemoveComments = (value, email, body) => {
    if (value === "add") {
      setComments([...comments, { email, body }]);
    } else {
      const filteredComments = comments.filter((check, i) => i !== email);
      setComments(filteredComments);
    }
  };
  return (
    <>
      {typeof comments === "undefined" ? (
        <p>Wczytuję komentarze...</p>
      ) : (
        <>
          {allComments &&
            comments.map((comment, i) => (
              <OneComment key={i}>
                <h4>{comment.email}</h4>
                <p>{comment.body}</p>
                <div onClick={() => addRemoveComments("remove", i, i)}>X</div>
              </OneComment>
            ))}
          <AddComment
            comments={comments}
            addRemoveComments={addRemoveComments}
          />
        </>
      )}
    </>
  );
}

const mapStateToProps = (state, ownProps) => ({
  error: state.comments.error,
  isFetching: state.comments.isFetching,
  allComments: state.comments.allComments[ownProps.idpost]
});
export default connect(mapStateToProps)(memo(Comments));
