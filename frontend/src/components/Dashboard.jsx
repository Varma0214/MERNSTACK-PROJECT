import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/resources');
        setResources(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError('Error fetching data. Please try again later.');
      }
    };
    fetchResources();
  }, []);

  if (error) {
    return <div className="dashboard-container"><h2>{error}</h2></div>;
  }

  return (
    <div className="dashboard-container">
      <div className="button-container">
        <Link to="/vendorform">
          <button className="nav-button">Vendor Form</button>
        </Link>
        <Link to="/resourceform">
          <button className="nav-button">Resource Form</button>
        </Link>
      </div>
      <h1>Resource Dashboard</h1>
      {resources.length === 0 ? (
        <p className="empty-message">No resources available at the moment.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Vendor</th>
              <th>Technologies</th>
              <th>Resume</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource._id}>
                <td>{resource.fullName}</td>
                <td>{resource.vendorName}</td>
                <td>{resource.technologies.join(', ')}</td>
                
                <td> Resume Uploaded Successfully</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
