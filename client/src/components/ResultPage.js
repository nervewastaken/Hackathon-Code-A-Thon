import React from 'react';
import './ResultPage.css'; // Ensure to import the CSS file for styling


const ResultPage = () => {
    // Function to handle PDF download
  return (
    <div className="result-container">
      <h1>Inspection Details</h1>
      <div className="button-container">
       
   
      </div>
      <div className="section-container">
        <section className="section half-width">
          <h2>Tires</h2>
          <table className="result-table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Reading</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tire Pressure for Left Front</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Tire Pressure for Right Front</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Tire Condition for Left Front</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Tire Condition for Right Front</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Tire Pressure for Left Rear</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Tire Pressure for Right Rear</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Tire Condition for Left Rear</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Tire Condition for Right Rear</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Overall Tire Summary</td>
                <td colSpan="2"><input type="text" className="full-width" /></td>
              </tr>
              <tr>
                <td>Attached Images</td>
                <td colSpan="2"><input type="file" multiple /></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="section half-width">
          <h2>Battery</h2>
          <table className="result-table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Reading</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Battery Make</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Battery Replacement Date</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Battery Voltage</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Battery Water Level</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Condition of Battery</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Any Leak / Rust in Battery</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Battery Overall Summary</td>
                <td colSpan="2"><input type="text" className="full-width" /></td>
              </tr>
              <tr>
                <td>Attached Images</td>
                <td colSpan="2"><input type="file" multiple /></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <div className="section-container">
        <section className="section half-width">
          <h2>Exterior</h2>
          <table className="result-table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Reading</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rust, Dent or Damage to Exterior</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Oil Leak in Suspension</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Overall Summary</td>
                <td colSpan="2"><input type="text" className="full-width" /></td>
              </tr>
              <tr>
                <td>Attached Images</td>
                <td colSpan="2"><input type="file" multiple /></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="section half-width">
          <h2>Brakes</h2>
          <table className="result-table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Reading</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brake Fluid Level</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Brake Condition for Front</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Brake Condition for Rear</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Emergency Brake</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Brake Overall Summary</td>
                <td colSpan="2"><input type="text" className="full-width" /></td>
              </tr>
              <tr>
                <td>Attached Images</td>
                <td colSpan="2"><input type="file" multiple /></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <section className="section">
        <h2>Engine</h2>
        <table className="result-table">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Reading</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rust, Dents or Damage in Engine</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>Engine Oil Condition</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>Engine Oil Color</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>Brake Fluid Condition</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>Brake Fluid Color</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>Any Oil Leak in Engine</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>Overall Summary</td>
              <td colSpan="2"><input type="text" className="full-width" /></td>
            </tr>
            <tr>
              <td>Attached Images</td>
              <td colSpan="2"><input type="file" multiple /></td>
            </tr>
          </tbody>
        </table>
      </section>
<br></br>
      <section className="section">
        <h2>Voice of Customer</h2>
        <table className="result-table">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Reading</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Customer Feedback</td>
              <td colSpan="2"><input type="text" className="full-width" /></td>
            </tr>
            <tr>
              <td>Images Related to Issues</td>
              <td colSpan="2"><input type="file" multiple /></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ResultPage;
