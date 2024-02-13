import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Get() {
  // Define state to store the fetched data
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await axios.get('https://openlibrary.org/people/mekBot/books/already-read.json');
        // Set the fetched data to the state
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        // Handle errors
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, []); // The empty array [] makes useEffect run only once

  // Render loading state while fetching data
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error message if there was an error fetching data
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render the fetched data
  return (
    <>
    <div>
      <h1>My Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
    </>
    
  );
}

export default Get;
