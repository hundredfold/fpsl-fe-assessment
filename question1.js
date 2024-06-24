// Question 1: Edit the following component to prevent memory leaks and ensure proper cleanup:


import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const result = await response.json();
    setData(result);
  };

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}

export default DataFetcher;