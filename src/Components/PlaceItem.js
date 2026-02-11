import React from 'react';

// Bu bileşen her bir gezi yerini temsil eder
const PlaceItem = ({ place, onToggle, onDelete }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn">
            <span style={{ 
                textDecoration: place.isVisited ? 'line-through' : 'none', 
                color: place.isVisited ? 'gray' : 'black',
                fontSize: '1.1rem'
            }}>
                <strong>{place.cityName}</strong> - {place.location}
            </span>
            <div>
                <button 
                    className={`btn btn-sm me-2 ${place.isVisited ? 'btn-secondary' : 'btn-success'}`}
                    onClick={() => onToggle(place.id)}
                >
                    {place.isVisited ? 'Gezildi' : 'Gez'}
                </button>
                <button 
                    className="btn btn-sm btn-danger" 
                    onClick={() => onDelete(place.id)}
                >
                    Sil
                </button>
            </div>
        </li>
    );
};

export default PlaceItem;