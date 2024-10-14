import React, { useState } from "react";
import TrendingResults from "./TrendingResults"; // Importing the TrendingResults component

const topics = ["Business", "Entertainment", "General", "Lifestyle", "Politics", "Science", "Sports", "Technology", "World"];

const TrendingNews = () => {
  const [selectedTopic, setSelectedTopic] = useState("General");

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic); 
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <h1 className="text-2xl font-bold mb-4">Trending Topics</h1>
      <div className="flex flex-wrap gap-4">
        {topics.map((topic, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={() => handleTopicClick(topic)}
          >
            {topic}
          </button>
        ))}
      </div>

      <TrendingResults topic={selectedTopic} />
    </div>
  );
};

export default TrendingNews;
