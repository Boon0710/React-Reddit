import AppLayout from "./ui/AppLayout"
import HomePage from "./pages/HomePage";
import Subreddit from "./pages/Subreddit";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
import UserProfile from "./pages/UserProfile";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/r/:subreddit" element={<Subreddit />} />
          <Route path="/r/:subreddit/comments/:postId/:postSlug" element={<PostDetail />}/>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/user/:username" element={<UserProfile />}/>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
