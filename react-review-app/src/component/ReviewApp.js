import React, { useState } from "react";

function ReviewApp() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Comment / Review</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <textarea
            style={{ width: "100%", height: "100px" }}
            placeholder="Write your comment here..."
            value={comment}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <h2>Comments:</h2>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          <ul>
            {comments.map((comment, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "10px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "10px",
                }}
              >
                {comment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ReviewApp;
