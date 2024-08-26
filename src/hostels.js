import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hostel() {
    const navigate = useNavigate();
    
    const hostels = [
        {
            name: "Vaishnavi",
            image: "#"
        },
        {
            name: "Saradha",
            image: "#"
        },
        {
            name: "Sitha",
            image: "#"
        },
        {
            name: "Medha",
            image: "#"
        },
        {
            name: "Manasa",
            image: "#"
        },
        {
            name: "Yamini",
            image: "#"
        },
        {
            name: "Rajeswari",
            image: "#"
        },
        {
            name: "Rajyalakshmi",
            image: "#"
        }
    ];

    const handleHostelClick = (hostelName) => {
        navigate(`/rooms/${hostelName}`);
    };

    return (
        <div style={{
            background: '#e9d6fe',
            minHeight: '100vh',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1 style={{ color: '#4a148c', fontFamily: 'Lobster, cursive', marginBottom: '40px' }}>
                Our Hostels
            </h1>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                width: '100%',
                maxWidth: '1200px'
            }}>
                {hostels.map((hostel, index) => (
                    <div key={index} style={{
                        width: '250px',
                        background: '#fff',
                        borderRadius: '15px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        overflow: 'hidden',
                        marginBottom: '20px',
                        textAlign: 'center'
                    }}

                    onClick={() => handleHostelClick(hostel.name)}
                    >
                        <img src={hostel.image} alt={hostel.name} style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover'
                        }} />
                        <div style={{ padding: '20px' }}>
                            <h3 style={{ color: '#333', marginBottom: '10px' }}>{hostel.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hostel;



