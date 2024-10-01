import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

export default function Career() {
  const careersData = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate total pages
  const totalPages = Math.ceil(careersData.length / itemsPerPage);

  // Slice the data for the current page
  const currentItems = careersData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
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
      <div className="careers">
        {/* Use currentItems instead of careersData */}
        {currentItems.map((career) => (
          <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        ))}
      </div>
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
}

// loader
export const careersLoader = async () => {
  try {
    const res = await fetch("http://localhost:4000/careers");
    if (!res.ok) throw new Error("Failed to fetch careers");
    return res.json();
  } catch (error) {
    console.log(error);
    return []; // Return an empty array or handle error gracefully
  }
};
