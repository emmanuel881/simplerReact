import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  //   const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const careerDetails = useLoaderData();

  console.log("***************************************");

  console.log(careerDetails);
  console.log("***************************************");

  useEffect(() => {
    if (careerDetails) {
      setLoading(false);
    }
  }, [careerDetails]);

  //loading
  if (loading) return <p>Loading...</p>;

  //error
  if (careerDetails.mess) {
    return <p>Error: {careerDetails.mess.message}</p>;
  }
  return (
    <div className="career-details">
      <h2>Career detail for {careerDetails.title}</h2>
      <p>Starting salary: {careerDetails.salary}</p>
      <p>Location: {careerDetails.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          cupiditate ducimus illum temporibus unde eaque? Voluptates cum
          pariatur esse sed ea dolorem impedit corporis nisi? Dolore laborum
          enim amet totam.
        </p>
      </div>
    </div>
  );
}

export const CareerDetailsLoader = async ({ params }) => {
  const { id } = params;

  try {
    const res = await fetch(`http://localhost:4000/careers/${id}`);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch career details: ${res.status} ${res.statusText}`
      );
    }
    return res.json();
  } catch (error) {
    // Return an error object to display in the component
    return { mess: error };
  }
};
