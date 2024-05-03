const Myimages = ({ images }) => {
  return (
    <div className="container">
      {images.map((image) => (
        <div className="box" key={image.id}>
          <p>{image.id}</p>
          <button>Add to favorites</button>
        </div>
      ))}
    </div>
  );
};

export default Myimages;
