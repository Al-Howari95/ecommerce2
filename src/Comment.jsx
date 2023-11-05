import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Comment = () => {
  // ... (your existing code)

  // State to store user comments
  const [userComment, setUserComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setUserComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    // Add the user's comment to the list of comments
    setComments([...comments, userComment]);

    // Clear the input field after submission
    setUserComment('');
  };

  return (
    <div>
      {/* ... (your existing code) */}

      {/* User Comment Section */}
      <div>
        <h3>Add Your Comment</h3>
        <input
          type="text"
          value={userComment}
          onChange={handleCommentChange}
          placeholder="Write your comment..."
        />
        <button onClick={handleCommentSubmit}>Submit Comment</button>
      </div>

      {/* Display User Comments */}
      <div>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comment;
