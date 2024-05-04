import { useState } from "react";
import useFetch from "./useFetch";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Favorites = () => {
  const history = useHistory();
  const {
    data: images,
    error,
    isPending,
  } = useFetch("http://localhost:8000/images");
  const removeFav = async (id) => {
    const resource = "http://localhost:8000/images/" + id;
    try {
      const updatedData = { id: id, fav: false };

      await axios.patch(resource, updatedData);

      console.log("Removed from favorite list");
      history.push("Upload");
    } catch (error) {
      console.log("Error updating JSON file: ", error);
    }
  };

  return (
    <div className="fav">
      <h1>My Favorites Images</h1>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <div className="container">
        {images &&
          images.map((image) =>
            image.fav === true ? (
              <div className="box" key={image.id}>
                <p>{image.id}</p>
                <button
                  style={{
                    backgroundColor: "#e83336",
                  }}
                  onClick={() => removeFav(image.id)}
                >
                  Remove
                </button>
              </div>
            ) : null
          )}
      </div>
    </div>
  );
};

export default Favorites;
