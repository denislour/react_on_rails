import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";

function PostNewForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, body };

    fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/"); // Điều hướng về trang danh sách bài viết sau khi lưu thành công
      })
      .catch((error) => console.error("Error creating new post:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default PostNewForm;
