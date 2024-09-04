import { Routes, Route } from "react-router-dom";
import PostList from "../features/posts/PostList";
import PostDetail from "../features/posts/PostDetail";
import PostNewForm from "../features/posts/PostNewForm"; // Thêm import cho PostNewForm

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/new" element={<PostNewForm />} />
      <Route path="/posts/:id" element={<PostDetail />} />
    </Routes>
  );
}

export default AppRoutes;
