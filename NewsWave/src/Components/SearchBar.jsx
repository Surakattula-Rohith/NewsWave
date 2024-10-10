import SearchResults from "./SearchResults"; // Importing the SearchResults component
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Ensure this import is included

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setSubmittedQuery(search); // Set the submitted query
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <form className="relative w-full max-w-md" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          value={search}
          className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <button
          type="submit" // Use button as a submit button
          className="absolute right-2 top-2 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        >
          <FaSearch />
        </button>
      </form>

      <SearchResults query={submittedQuery} />
    </div>
  );
};

export default SearchBar;
