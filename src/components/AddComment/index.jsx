import React, { useState } from "react";

import { connect } from "react-redux";
import { sumComments } from "../../store/actions/sumCommentsAction";

function AddComment({ comments, sumComments }) {
  const [email, setEmail] = useState({});
  const [body, setBody] = useState({});

  const addYourComment = () => {
    sumComments(comments, email,body);
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
  comments: state.comments.comments,
  error: state.comments.error,
  isFetching: state.comments.isFetching
});

const mapDispatchToProps = dispatch => ({
  sumComments: (comments,email,body) => dispatch(sumComments(comments,email,body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment);
