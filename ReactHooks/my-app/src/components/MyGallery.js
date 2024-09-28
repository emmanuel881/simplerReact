import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const MyGallery = () => {
  //currently an empty array
  const [imgData, setImgData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => setImgData(response.data.slice(0, 5)))
      .catch((error) => console.log(error)); //pic the first 15
  }, []);
  return (
    <div>
      <h1>My gallery app using useEffect</h1>

      <div className="row">
        {imgData.length > 0 ? (
          imgData.map((img) => (
            <div className="card m-3" style={{ width: "18rem" }} key={img.id}>
              <img src={img.url} className="card-img-top" alt="Img" />
              <div className="card-body">
                <h5 className="card-title">{img.title}</h5>
                <p className="card-text">Album ID is : {img.albumId}</p>
              </div>
            </div>
          ))
        ) : (
          <p>...Loading image</p>
        )}
      </div>
    </div>
  );
};

export default MyGallery;
