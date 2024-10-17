import React, { useState, useEffect } from "react";
import axios from "axios";

const MyGallery = () => {
  // Initialize with an empty array
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => setImgData(response.data.slice(0, 5))) // Fetch the first 5
      .catch((error) => console.log(error));
  }, [imgData]);

  return (
    <div>
      <h1>My Gallery App using useEffect</h1>

      <div className="row">
        {imgData.length > 0 ? (
          imgData.map((img) => (
            <div className="col-md-3 mb-4" key={img.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={img.url} className="card-img-top" alt={img.title} />
                <div className="card-body">
                  <h5 className="card-title">{img.title}</h5>
                  <p className="card-text">Album ID: {img.albumId}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="Loading">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden text-primary">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyGallery;
