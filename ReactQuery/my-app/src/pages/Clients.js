import React from "react";
import { useLoaderData } from "react-router-dom";

const Clients = () => {
  const clientData = useLoaderData();
  if (clientData.error) {
    return <p>Error: {clientData.error}</p>;
  }
  return (
    <div>
      <h1>Client</h1>
      <div className="clientContainer">
        {clientData.length > 0 ? (
          clientData.map((client) => {
            return (
              <div key={client.id}>
                <div className="clients">
                  <p>{client.name}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No client available</p>
        )}
      </div>
    </div>
  );
};

//my loader
export const clientLoader = async () => {
  try {
    const res = await fetch("http://localhost:4000/Dreamcar");
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return { error: "Failed to fetch client data" };
  }
};

export default Clients;
