import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Booking() {
  const { roomNumber } = useParams(); // Get the room number from the URL

  const initialBeds = [
    { id: 1, color: 'red' },
    { id: 2, color: 'yellow' },
    { id: 3, color: 'green' },
    { id: 4, color: 'green' }
  ];

  const [beds, setBeds] = useState(initialBeds);
  const [message, setMessage] = useState('');

  const handleBedClick = (bed) => {
    if (bed.color === 'red') {
      alert('This bed is already booked');
    } else if (bed.color === 'yellow') {
      alert('This bed is waiting for approval');
    } else if (bed.color === 'green') {
      setMessage(`Selected Bed ${bed.id}`);
    }
  };

  const handleSubmit = () => {
    const selectedBed = beds.find(bed => bed.color === 'green' && message.includes(bed.id.toString()));
    if (selectedBed) {
      alert(`Request is submitted successfully for Bed ${selectedBed.id}`);
      
      setBeds(prevBeds => prevBeds.map(bed =>
        bed.id === selectedBed.id ? { ...bed, color: 'yellow' } : bed
      ));

      setMessage(''); 
    } else {
      alert('Please select a bed before submitting');
    }
  };

  const bedStyle = (color) => ({
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    color: color === 'yellow' ? 'black' : 'white',
    backgroundColor: color,
    cursor: 'pointer',
    borderRadius: '5px',
  });

  return (
    <div style={{ backgroundColor: '#e9d6fe', minHeight: '100vh', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
          Beds in the room number: {roomNumber} 
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
          {beds.map(bed => (
            <div
              key={bed.id}
              style={bedStyle(bed.color)}
              onClick={() => handleBedClick(bed)}
            >
              Bed {bed.id}
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Submit Request
        </button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Booking;
