import { Routes, Route } from "react-router-dom";
import PostList from "../features/posts/PostList";
import PostDetail from "../features/posts/PostDetail";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/new" element={<h1>New Post</h1>} />
      <Route path="/posts/:id" element={<PostDetail />} />
    </Routes>
  );
}

export default AppRoutes;
