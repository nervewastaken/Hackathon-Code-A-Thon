import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/form"; // Import Form from components folder
import ResultPage from "./components/ResultPage"; // Import ResultPage component
import catLogo from "./cat-logo.png"; // Import the CAT logo
import img1 from "./img1.jpg"; // Correct import for the image

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Set loading time to 1 second

    return () => clearTimeout(timer);
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadFile = () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    fetch("http://127.0.0.1:4000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("File uploaded successfully!");
        console.log(data); // Log the response data here
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to upload file.");
      });
  };

  return (
    <Router>
      <div>
        <input type="file" onChange={handleFileChange} accept=".wav" />
        <button onClick={uploadFile}>Upload</button>
      </div>
    </Router>
  );
}

export default App;
