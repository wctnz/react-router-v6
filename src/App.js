import { Routes, Route, Link } from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import BlogPage from "./pages/BlogPage"
import HomePage from "./pages/HomePage"
import CreatePost from "./pages/CreatePost"
import NotFoundPage from "./pages/NotFoundPage"
import Layout from "./components/Layout/Layout"
import SinglePage from "./pages/SinglePage"
import EditPage from "./pages/EditPage"
import RequireAuth from "./components/hoc/RequireAuth"
import LoginPage from "./pages/LoginPage"
import { AuthProvider } from "./components/hoc/AuthProvider"

const App = () => {
  return (<>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} >
            <Route path="contacts" element={<p>Our contacts</p>} />
            <Route path="team" element={<p>Our team</p>} />
          </Route>
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<EditPage />} />
          <Route path="posts/new" element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
          } />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  </>);
};

export default App;