import { useState } from 'react';

function useCommentsManagement() {
  const [comments, setComments] = useState([]);

  function fetchComments() {
    return fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  }

  return {
    comments,
    fetchComments,
  };
}

export default useCommentsManagement;
