import axios from "axios";

const Myimages = ({ images }) => {
  const addToFav = async (id) => {
    const resource = "http://localhost:8000/images/" + id;
    try {
      const updatedData = { id: id, fav: true };

      await axios.patch(resource, updatedData);

      console.log("added to favorite list");
      window.location.reload();
    } catch (error) {
      console.log("Error updating JSON file: ", error);
    }
  };

  return (
    <div className="container">
      {images.map((image) => (
        <div className="box" key={image.id}>
          <p>{image.id}</p>
          {image.fav === false && (
            <button onClick={() => addToFav(image.id)}>Add to favorites</button>
          )}
          {image.fav === true && <p>was added to favorite list</p>}
        </div>
      ))}
    </div>
  );
};

export default Myimages;
