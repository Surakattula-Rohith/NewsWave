const NewsCard = ({ result }) => {
  return (
    <li className="bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 duration-200 ease-in-out">
      <a href={result.url} target="_blank" rel="noopener noreferrer" className="block">
        {result.thumbnail && (
          <img
            src={result.thumbnail}
            alt={result.title}
            className="w-full h-50 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold hover:text-blue-400">
            {result.title}
          </h3>
          <p className="text-gray-400 text-xs mt-1">{new Date(result.date).toLocaleDateString()}</p>
          <p className="text-gray-300 mt-2">{result.excerpt}</p>
        </div>
      </a>
    </li>
  );
};

export default NewsCard;
