import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const RQClients = () => {
  // Ensure that axios.get() returns the data correctly
  const { data, isLoading, error } = useQuery("RQCLientQuery", () =>
    axios.get("http://localhost:4000/Dreamcar").then((res) => res.data)
  );

  if (isLoading) {
    return <h3>Loading data...</h3>;
  }

  if (error) {
    return <h3>Error loading data: {error.message}</h3>;
  }

  return (
    <div>
      <h1>RQClients</h1>
      {data &&
        data.map((client) => (
          <div key={client.id}>
            <h3>{client.name}</h3>
          </div>
        ))}
    </div>
  );
};

export default RQClients;
