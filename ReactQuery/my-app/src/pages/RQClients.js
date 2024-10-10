import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const RQClients = () => {
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const itemPerPage = 6;

  // Fetch data with react-query
  // data is the payload
  const { data, isLoading, error } = useQuery("RQClientQuery", () =>
    axios.get("http://localhost:4000/Dreamcar").then((res) => res.data)
  );

  // Handle loading state
  if (isLoading) {
    return <h3>Loading data...</h3>;
  }

  // Handle error state
  if (error) {
    return (
      <h3>
        Error loading data: {error.message}. Please check your API endpoint.
      </h3>
    );
  }

  // Safeguard for undefined or empty data
  if (!data || data.length === 0) {
    return <h3>No clients available.</h3>;
  }

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemPerPage);

  // Slice the data for the current page
  const currentItems = data.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  // Handlers for Next and Previous buttons
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <h1>RQ Clients</h1>
      {currentItems.map((client) => (
        <div key={client.id}>
          <div className="clients">
            <h3>{client.name}</h3>
          </div>
        </div>
      ))}

      <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RQClients;
