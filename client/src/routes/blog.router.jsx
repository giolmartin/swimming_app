import { Routes, Route } from 'react-router-dom';
import BlogPost from '../pages/BlogPost/blogPost.page';
import Blogs from '../pages/Blogs/blogs.page';


const BlogRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='post/:id' element={<BlogPost />} />
      </Routes>
    </>
  );
};

export default BlogRoutes;
