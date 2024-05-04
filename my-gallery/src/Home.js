import Myimages from "./Myimages";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: images,
  } = useFetch("http://localhost:8000/images");

  return (
    <div className="home">
      <h1>My Images</h1>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {images && <Myimages images={images} />}
    </div>
  );
};

export default Home;
