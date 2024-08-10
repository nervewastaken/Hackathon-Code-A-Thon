import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation and submission logic here
    navigate('/result'); // Navigate to the ResultPage component
  };

  return (
    <form className="inspection-form" onSubmit={handleSubmit}>
      <h1 className="form-header">CAT Equipment Inspection Form</h1>
      {/* Form Fields */}
      <label>
        Truck Serial Number
        <input type="text" />
      </label>
      <label>
        Truck Model
        <input type="text" />
      </label>
      <label>
        Inspection ID
        <input type="text" />
      </label>
      <label>
        Inspector Name
        <input type="text" />
      </label>
      <label>
        Inspection Employee ID
        <input type="text" />
      </label>
      <label>
        Date & Time of Inspection
        <input type="text" />
      </label>
      <label>
        Location of Inspection
        <input type="text" />
      </label>
      <label>
        Geo Coordinates of Inspection (optional)
        <input type="text" />
      </label>
      <label>
        Service Meter Hours
        <input type="text" />
      </label>
      <label>
        Inspector Signature
        <input type="password" />
      </label>
      <label>
        Customer Name / Company Name
        <input type="text" />
      </label>
      <label>
        CAT Customer ID
        <input type="text" />
      </label>
      <button type="submit" className="button-52">Submit</button>
    </form>
  );
};

export default Form;
