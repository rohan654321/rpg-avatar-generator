import React, { useState } from "react";
import './Avatar.css'

const AvatarCanvas = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate the file type
      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }
      // Preview the uploaded image
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="avatar-canvas">
      <h3>Upload Your Avatar</h3>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Avatar Preview" className="avatar-preview" />}
    </div>
  );
};

export default AvatarCanvas;
