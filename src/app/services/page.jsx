"use client";
import React, { useEffect, useState } from 'react';
const Card = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e13ba0ecc5d643f1a7f8189dfcafd005" , {next:{revalidate:3600}});
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center ">
      {articles.map((article, index) => (
        <div key={index} className="max-w-xs w-full rounded overflow-hidden shadow-lg m-6 mt-[4rem] bg-white flex flex-col">
          <div className="relative w-full h-48">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={article.urlToImage || "https://via.placeholder.com/300"}
              alt={article.title || "No image available"}
            />
          </div>
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2 text-black">{article.title.slice(0,40) || "No title available"}...</div>
            <p className="text-gray-700 text-base line-clamp-3">
              {article.description || "No description available"}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 -mt-3">
            {article.url ? (
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Read More
              </a>
            ) : (
              <span className="bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed">
                No link available
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
