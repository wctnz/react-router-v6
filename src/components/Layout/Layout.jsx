import { Link, Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Blog</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
    
    <Outlet/>
    
    <footer>2024</footer>
    </>
  );
};

export default Layout;
