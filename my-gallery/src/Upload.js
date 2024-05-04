import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Upload = () => {
  const history = useHistory();
  //image url
  const [url, setUrl] = useState(null);
  //select data
  const [description, setDescription] = useState("none");

  //loading button
  const [isPending, setIsPending] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    //check if file is an image
    if (file && file.type.startsWith("image/")) {
      setUrl(URL.createObjectURL(file));
    } else {
      setUrl(null);
      alert("please select an image");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const fav = false;
    setIsPending(true);
    const imageUpload = { url, description, fav };
    console.log(imageUpload);

    fetch("http://localhost:8000/images", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(imageUpload),
    }).then(() => {
      setIsPending(false);
      alert("upload complete");
      history.push("/");
    });
  };
  return (
    <div className="upload">
      <h1>Add image</h1>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <select
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        >
          <option>car</option>
          <option>dog</option>
          <option>girl</option>
          <option>cat</option>
          <option>none</option>
        </select>
        <label>chose image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        {!isPending && <button>Upload</button>}
        {isPending && (
          <button
            disabled
            style={{
              backgroundColor: "#e83336",
            }}
          >
            Uploading ...
          </button>
        )}
      </form>
    </div>
  );
};

export default Upload;
