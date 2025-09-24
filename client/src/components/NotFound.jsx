// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-800 text-white mb-2">
      <h1 className="text-9xl font-bold text-blue-500 animate-bounce">404</h1>
      <h2 className="text-3xl mt-4 mb-2 text-white">Oops! Page Not Found</h2>
      <p className="text-gray-300 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
