import { useState } from "react";

const FileUploader = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc" }}>
      <input type="file" onChange={handleFileChange} />
      {fileName && <p>Selected File: {fileName}</p>}
    </div>
  );
};

export default FileUploader;
