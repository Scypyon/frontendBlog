import React, { useState } from "react";

import { connect } from "react-redux";
import { sumComments } from "../../store/actions/sumCommentsAction";

function AddComment({ allComments, sumComments }) {
  const [email, setEmail] = useState({});
  const [body, setBody] = useState({});

  const addYourComment = () => {
    sumComments(allComments, email, body);
  };
  return (
    <>
      <input
        type="text"
        placeholder="email"
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="your comment"
        onChange={e => setBody(e.target.value)}
      />
      <br />
      <button onClick={addYourComment}>Dodaj Komentarz</button>
    </>
  );
}

const mapStateToProps = state => ({
  allComments: state.comments.allComments,
  error: state.comments.error,
  isFetching: state.comments.isFetching
});

const mapDispatchToProps = dispatch => ({
  sumComments: (allComments, email, body) =>
    dispatch(sumComments(allComments, email, body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment);
