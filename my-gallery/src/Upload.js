import { useState } from "react";

const Upload = () => {
  //image url
  const [selectImage, setSelectImage] = useState(null);
  //select data
  const [description, setDescription] = useState("none");

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    //check if file is an image
    if (file && file.type.startsWith("image/")) {
      setSelectImage(URL.createObjectURL(file));
    } else {
      setSelectImage(null);
      alert("please select an image");
    }
  };
  return (
    <div className="upload">
      <h1>Add image</h1>
      <form>
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
        <button>Upload</button>
      </form>
    </div>
  );
};

export default Upload;
