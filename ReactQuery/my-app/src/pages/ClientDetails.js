import React from "react";
import { Link, useParams } from "react-router-dom";
import { useClienHook } from "../Hooks/useClientHook";

const ClientDetails = () => {
  //id
  const { id } = useParams();
  //my url
  const url = `http://localhost:4000/Dreamcar/${id}`;

  //query identifier
  const queryIdentifier = ["singleClient", id];

  const successFetch = (data) => {
    console.log("Fetch successful");
    // console.log(data);
  };
  const failFetch = (error) => {
    console.log("Fetch failed", error);
    return <h2>{error}</h2>;
  };

  const { data, isLoading } = useClienHook({
    onSuccess: successFetch,
    onError: failFetch,
    url: url,
    queryIdentifier,
  });

  // Handle loading state
  if (isLoading) {
    return <h3>Loading data...</h3>;
  }

  // Safeguard for undefined
  if (!data && !isLoading) {
    return <h3>Client does not exist or an error occurred</h3>;
  }

  return (
    <div>
      <h1>Info</h1>
      <h3>
        Detailes about {data.name} {data.lastName}
      </h3>
      <div className="clientEmail">
        <small>@{data.email}</small>
      </div>
      <div className="clientInfo">
        <div className="clientDetails">
          <span>gender</span>
          <span> - </span>
          <span>{data.gender}</span>
        </div>
        <div className="clientDetails">
          <span> Dream Car</span>
          <span> - </span>
          <span>
            {data.carCompany} {data.DreamCar}
          </span>
        </div>
        <div className="clientDetails">
          <span> Year of manufacture</span>
          <span> - </span>
          <span>{data.modelYear}</span>
        </div>
      </div>
      <div className="back">
        <Link to="/rqClients">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ClientDetails;
