import React from 'react'
import { Link } from 'react-router-dom';
import App from "../../public/app.jpg"
const Homepage = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    
    backgroundImage: `url(${App})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to My React App</h1>
      <p className="mb-5">
      This is a multi-page React application built with React Router and styled with Tailwind CSS.
      Explore the app to learn more about its features and users.
      </p>
      <div className="space-x-4">
            <Link to="/about" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Go to About
            </Link>
            <Link to="/users" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              View Users
            </Link>
          </div>
    </div>
  </div>
  </div>);
}

export default Homepage