import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import Subreddit from "./pages/Subreddit";
import PostDetail from "./pages/PostDetail";
import CreatePost from "./pages/CreatePost";
import UserProfile from "./pages/UserProfile";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/r/:subreddit" element={<Subreddit />} />
            <Route
              path="/r/:subreddit/comments/:postId/:postSlug"
              element={<PostDetail />}
            />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/user/:username" element={<UserProfile />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)"
          }
        }}
      />
    </QueryClientProvider>
    
  );
}

export default App;
