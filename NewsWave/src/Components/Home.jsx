import React from 'react';
import TrendingNews from './TrendingNews';
import SearchBar from './SearchBar';
import RandomNews from './RandomNews';
import { Routes, Route, Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav className="bg-gray-700 text-white w-full z-10 p-4 flex justify-between items-center">
        <Link to="trending" className="bg-green-500 py-2 px-4 rounded hover:bg-green-600 transition">Trending</Link>
        
        <Link to="search" className="text-lg font-bold">Search</Link>
        
        <Link to="random" className="bg-green-500 py-2 px-4 rounded hover:bg-green-600 transition">Random News</Link>
      </nav>
      <div className="h-4"></div>
      <Outlet />
    </div>
  );
}

export default Home;
