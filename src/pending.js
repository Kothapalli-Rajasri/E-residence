import React, { useState } from 'react';

function Pending2() {
  const [searchTerm, setSearchTerm] = useState('');
  const [requests, setRequests] = useState([
    { applicationNumber: 'A001', hostelName: 'Hostel A', roomNumber: '101', bedNumber: '1' },
    { applicationNumber: 'A002', hostelName: 'Hostel B', roomNumber: '102', bedNumber: '2' },
    { applicationNumber: 'A003', hostelName: 'Hostel C', roomNumber: '103', bedNumber: '3' },
    { applicationNumber: 'A004', hostelName: 'Hostel D', roomNumber: '104', bedNumber: '4' },
    { applicationNumber: 'A005', hostelName: 'Hostel E', roomNumber: '105', bedNumber: '5' }
  ]);

  const filteredRequests = requests.filter(request => 
    request.applicationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.hostelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.roomNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.bedNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAccept = (request) => {
    // Add to acceptedRequests in localStorage
    let acceptedRequests = JSON.parse(localStorage.getItem('acceptedRequests')) || [];
    acceptedRequests.push(request);
    localStorage.setItem('acceptedRequests', JSON.stringify(acceptedRequests));

    // Remove from pending requests
    setRequests(prevRequests => prevRequests.filter(r => r.applicationNumber !== request.applicationNumber));

    // Show popup
    alert('Request is accepted');
  };

  const handleReject = (request) => {
    // Add to rejectedRequests in localStorage
    let rejectedRequests = JSON.parse(localStorage.getItem('rejectedRequests')) || [];
    rejectedRequests.push(request);
    localStorage.setItem('rejectedRequests', JSON.stringify(rejectedRequests));

    // Remove from pending requests
    setRequests(prevRequests => prevRequests.filter(r => r.applicationNumber !== request.applicationNumber));

    // Show popup
    alert('Request is rejected');
  };

  return (
    <div>
      {/* Heading Section */}
      <div style={{ backgroundColor: 'blue', height: '13vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h4 style={{ color: 'black' }}>Pending Requests</h4>
      </div>

      {/* Search Bar Section */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <label htmlFor="student-search" style={{ marginRight: '10px', fontWeight: 'bold' }}>
          Search by Application Number:
        </label>
        <input 
          type="text" 
          id="student-search" 
          placeholder="Enter search term..." 
          style={{ padding: '5px', width: '250px', borderRadius: '4px', border: '1px solid #ddd' }} 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table Section */}
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: 'blue', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Application Number</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Hostel Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Room Number</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Bed Number</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((request, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{request.applicationNumber}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{request.hostelName}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{request.roomNumber}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{request.bedNumber}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                <button 
                  style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '4px', marginRight: '5px' }}
                  onClick={() => handleAccept(request)}
                >
                  Accept
                </button>
                <button 
                  style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '4px' }}
                  onClick={() => handleReject(request)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pending2;