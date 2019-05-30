import React, { useState } from "react";

export default function AddComment({ addRemoveComments }) {
  const [email, setEmail] = useState({});
  const [body, setBody] = useState({});

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
      <button onClick={() => addRemoveComments("add", email, body)}>
        Dodaj Komentarz
      </button>
    </>
  );
}
