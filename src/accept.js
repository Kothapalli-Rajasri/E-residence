import React, { useState, useEffect } from 'react';

function Accept2() {
  const [acceptedRequests, setAcceptedRequests] = useState([]);

  useEffect(() => {
    const requests = JSON.parse(localStorage.getItem('acceptedRequests')) || [];
    setAcceptedRequests(requests);
  }, []);

  const clearAcceptedRequests = () => {
    localStorage.removeItem('acceptedRequests');
    setAcceptedRequests([]);
  };

  return (

    <div st>
      {/* Heading Section */}
      <div style={{ backgroundColor: '#77dd77', height: '13vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h4 style={{ color: 'black' }}>Approved Requests</h4>
      </div>

      {/* Clear Button */}
      <button onClick={clearAcceptedRequests} style={{ margin: '20px', padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px' }}>
        Clear All
      </button>

      {/* Display Accepted Requests in a Table */}
      {acceptedRequests.length > 0 && (
        <div style={{ padding: '20px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#77dd77', color: 'white' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Application Number</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Hostel Name</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Room Number</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Bed Number</th>
              </tr>
            </thead>
            <tbody>
              {acceptedRequests.map((request, index) => (
                <tr key={index}>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{request.applicationNumber}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{request.hostelName}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{request.roomNumber}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{request.bedNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Accept2;