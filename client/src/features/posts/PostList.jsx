import { API_URL } from "../../constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
