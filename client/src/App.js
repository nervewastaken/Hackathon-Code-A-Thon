import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/form"; // Import Form from components folder
import ResultPage from "./components/ResultPage"; // Import ResultPage component
import catLogo from "./cat-logo.png"; // Import the CAT logo
import img1 from "./img1.jpg"; // Correct import for the image

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Set loading time to 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <div className="loading-screen">
            <img src={catLogo} alt="CAT Logo" className="cat-logo" />
          </div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <div className="main-container">
                  <div className="image-container">
                    <img src={img1} alt="Inspection" className="side-image" />
                  </div>
                  <div className="form-container">
                    <Form />
                  </div>
                </div>
              }
            />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
