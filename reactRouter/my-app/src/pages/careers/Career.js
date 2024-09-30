import React from "react";
import { useLoaderData, Link } from "react-router-dom";

export default function Career() {
  const careersData = useLoaderData();

  console.log(careersData);

  return (
    <div className="careers">
      {careersData.map((career) => (
        <Link to="/" key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

//loader
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
