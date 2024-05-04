import useFetch from "./useFetch";

const Favorites = () => {
  const {
    data: images,
    error,
    isPending,
  } = useFetch("http://localhost:8000/images");
  return (
    <div className="fav">
      <h1>My Favorites Images</h1>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <div className="container">
        {images &&
          images.map((image) =>
            image.fav === "true" ? (
              <div className="box" key={image.id}>
                <p>{image.id}</p>
                <button
                  style={{
                    backgroundColor: "#e83336",
                  }}
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
