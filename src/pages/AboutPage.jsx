import React from "react";
import { Link, Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      ABOUT PAGE
      <ul>
        <li>
          <Link to="contacts">Our contacts</Link>
        </li>
        <li>
          <Link to="team">Our team</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AboutPage;
