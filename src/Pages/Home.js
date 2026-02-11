import React, { useState } from 'react';
import PlaceItem from '../Components/PlaceItem'; 

const Home = () => {
    // Verilerimizi ve kutucukları kontrol eden alan (State)
    const [places, setPlaces] = useState([]);
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");

    // ➕ EKLEME FONKSİYONU 
    const addPlace = () => {
        if (city.trim() && location.trim()) {
            const newPlace = {
                id: Date.now(),
                cityName: city,
                location: location,
                isVisited: false
            };
            setPlaces([...places, newPlace]);
            setCity(""); // Ekleme sonrası kutuyu temizle
            setLocation(""); // Ekleme sonrası kutuyu temizle
        }
    };

    // 🗑️ SİLME FONKSİYONU [cite: 22]
    const deletePlace = (id) => {
        setPlaces(places.filter(p => p.id !== id));
    };

    // ✅ GÜNCELLEME FONKSİYONU [cite: 21]
    const toggleVisited = (id) => {
        setPlaces(places.map(p => 
            p.id === id ? { ...p, isVisited: !p.isVisited } : p
        ));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-primary">🌍 Gezgin Günlüğüm</h1>
            
            {/* --- 1. KISIM: EKLEME FORMU --- */}
            <div className="card p-4 mb-5 shadow-sm border-0 bg-light">
                <h4 className="mb-3">Yeni Yer Ekle </h4>
                <div className="row g-3">
                    <div className="col-md-5">
                        <label className="form-label">Şehir</label>
                        <input 
                            type="text" className="form-control" placeholder="Örn: Çanakkale" 
                            value={city} onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="col-md-5">
                        <label className="form-label">Görülecek Yer</label>
                        <input 
                            type="text" className="form-control" placeholder="Örn: Aynalı Çarşı" 
                            value={location} onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2 d-flex align-items-end">
                        <button className="btn btn-primary w-100 py-2" onClick={addPlace}>Ekle</button>
                    </div>
                </div>
            </div>

            {/* --- 2. KISIM: LİSTELEME --- */}
            <div className="row">
                <div className="col-12">
                    <h4 className="mb-3">Gezi Listem ({places.length}) </h4>
                    <ul className="list-group shadow-sm">
                        {places.map((place) => (
                            <PlaceItem 
                                key={place.id} 
                                place={place} 
                                onToggle={toggleVisited} 
                                onDelete={deletePlace} 
                            />
                        ))}
                        {places.length === 0 && (
                            <li className="list-group-item text-center text-muted py-4">
                                Henüz bir yer eklemedin. Haydi yeni maceralar ekle!
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;