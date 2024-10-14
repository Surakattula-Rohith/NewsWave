import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard"; // Assuming you have a NewsCard component

const TrendingResults = ({ topic }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (topic) {
      const fetchTrendingNews = async () => {
        setLoading(true);
        const options = {
            method: 'GET',
            url: 'https://news-api14.p.rapidapi.com/v2/trendings',
            params: {
              topic: topic,
              language: 'en',
              country: 'in',
              page: '1'
            },
            headers: {
              'x-rapidapi-key': '723ce1b205mshd1a22dd217b3f06p12d3e8jsn0c8cddd020ef',
              'x-rapidapi-host': 'news-api14.p.rapidapi.com'
            }
          };

        try {
          const response = await axios.request(options);
          setResults(response.data.data);
        } catch (error) {
          console.error("Error fetching trending news:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchTrendingNews();
    }
  }, [topic]);

  return (
    <>
      <div className="mt-4">
        {loading && (
          <p className="text-black">
            Loading results for: <strong>{topic}</strong>
          </p>
        )}
        {!loading && results.length === 0 && (
          <p className="text-black">
            No results found for: <strong>{topic}</strong>
          </p>
        )}

        {!loading && results.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              Trending news for: <strong>{topic}</strong>
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <NewsCard key={index} result={result} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default TrendingResults;
