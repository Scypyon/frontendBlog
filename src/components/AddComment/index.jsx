import React, { useState, useEffect } from "react";

export default function AddComment({ addRemoveComments, comments }) {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [numberOfComments, setNumberOfComments] = useState(false);

  useEffect(() => {
    if (comments.length <= 5) setNumberOfComments(false);
  },[comments])

  return (
    <>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="your comment"
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          addRemoveComments("add", email, body);
          setEmail("");
          setBody("");
          setNumberOfComments(true);
        }}
        disabled={numberOfComments}
      >
        Dodaj Komentarz
      </button>
    </>
  );
}
