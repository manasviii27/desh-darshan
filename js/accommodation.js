const accommodations = [
    {
        id: 1,
        name: "Taj Palace Hotel",
        location: "New Delhi",
        lat: 28.5995,
        lng: 77.1845,
        type: "hotel",
        price: "Rs",
        priceValue: 8500,
        rating: 4.8,
        amenities: ["wifi", "restaurant", "pool", "parking"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
        desc: "Luxury 5-star in the heart of Delhi"
    },
    {
        id: 2,
        name: "The Leela Palace",
        location: "Bangalore",
        lat: 12.9616,
        lng: 77.6362,
        type: "resort",
        price: "Rs",
        priceValue: 12000,
        rating: 4.9,
        amenities: ["spa", "restaurant", "pool", "gym"],
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
        desc: "Royal luxury near MG Road"
    },
    {
        id: 3,
        name: "Cozy Homestay",
        location: "Jaipur",
        lat: 26.9124,
        lng: 75.7873,
        type: "homestay",
        price: "Rs",
        priceValue: 1500,
        rating: 4.5,
        amenities: ["wifi", "breakfast", "parking"],
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
        desc: "Traditional haveli near City Palace"
    },
    {
        id: 4,
        name: "ITC Grand Bharat",
        location: "Gurgaon",
        lat: 28.4595,
        lng: 77.0264,
        type: "resort",
        price: "Rs",
        priceValue: 15000,
        rating: 4.9,
        amenities: ["golf", "pool", "spa", "restaurant"],
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
        desc: "Ultra-luxury golf resort"
    },
    {
        id: 5,
        name: "Budget Inn Express",
        location: "Mumbai",
        lat: 19.0760,
        lng: 72.8777,
        type: "hotel",
        price: "Rs",
        priceValue: 2500,
        rating: 4.0,
        amenities: ["wifi", "restaurant", "parking"],
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
        desc: "Affordable stay near Station"
    },
    {
        id: 6,
        name: "Kumarakom Lake Resort",
        location: "Kumarakom",
        lat: 9.6176,
        lng: 76.4281,
        type: "resort",
        price: "Rs",
        priceValue: 6500,
        rating: 4.7,
        amenities: ["pool", "restaurant", "spa", "boat"],
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
        desc: "Backwater luxury with Ayurvedic spa"
    },
    {
        id: 7,
        name: "Backwater Homestay",
        location: "Alleppey",
        lat: 9.5902,
        lng: 76.3269,
        type: "homestay",
        price: "Rs",
        priceValue: 1800,
        rating: 4.6,
        amenities: ["wifi", "breakfast", "boat"],
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
        desc: "Authentic houseboat experience"
    },
    {
        id: 8,
        name: "The Grand Hotel",
        location: "Chennai",
        lat: 13.0827,
        lng: 80.2707,
        type: "hotel",
        price: "Rs",
        priceValue: 4500,
        rating: 4.3,
        amenities: ["wifi", "restaurant", "pool", "gym"],
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
        desc: "Heritage hotel near Marina Beach"
    },
    {
        id: 9,
        name: "Taj Corbett Resort",
        location: "Jim Corbett",
        lat: 29.6440,
        lng: 78.9353,
        type: "resort",
        price: "Rs",
        priceValue: 9500,
        rating: 4.8,
        amenities: ["safari", "restaurant", "nature", "pool"],
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&q=80",
        desc: "Jungle luxury near national park"
    },
    {
        id: 10,
        name: "Goa Beach Resort",
        location: "Goa",
        lat: 15.2993,
        lng: 74.1240,
        type: "resort",
        price: "Rs",
        priceValue: 5500,
        rating: 4.6,
        amenities: ["pool", "beach", "restaurant", "bar"],
        image: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=600&q=80",
        desc: "Beachfront resort in North Goa"
    },
    {
        id: 11,
        name: "City Budget Hotel",
        location: "Jaipur",
        lat: 26.9260,
        lng: 75.7565,
        type: "hotel",
        price: "Rs",
        priceValue: 2200,
        rating: 4.1,
        amenities: ["wifi", "breakfast", "parking"],
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
        desc: "Clean budget stay near Railway Station"
    },
    {
        id: 12,
        name: "Heritage Homestay",
        location: "Udaipur",
        lat: 24.5854,
        lng: 73.7125,
        type: "homestay",
        price: "Rs",
        priceValue: 3500,
        rating: 4.7,
        amenities: ["wifi", "breakfast", "heritage", "parking"],
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80",
        desc: "Lake view heritage homestay"
    },
    {
        id: 13,
        name: "Taj Hotel & Convention",
        location: "Agra",
        lat: 27.1751,
        lng: 78.0421,
        type: "hotel",
        price: "Rs",
        priceValue: 7500,
        rating: 4.7,
        amenities: ["wifi", "restaurant", "pool", "spa"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
        desc: "Luxury stay with Taj Mahal view"
    },
    {
        id: 14,
        name: "Nikko Hotel",
        location: "Varanasi",
        lat: 25.3176,
        lng: 82.9739,
        type: "hotel",
        price: "Rs",
        priceValue: 4200,
        rating: 4.4,
        amenities: ["wifi", "restaurant", "ghat"],
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
        desc: "Ganges view near Assi Ghat"
    },
    {
        id: 15,
        name: "Clarks Shiraz Hotel",
        location: "Lucknow",
        lat: 26.8467,
        lng: 80.9462,
        type: "hotel",
        price: "Rs",
        priceValue: 4800,
        rating: 4.5,
        amenities: ["wifi", "restaurant", "pool", "heritage"],
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
        desc: "Heritage hotel in Hazratganj"
    }
];

let currentFilter = 'all';
let hotelMap;
let hotelMarkers = [];

function initHotelMap() {
    hotelMap = L.map('hotel-map').setView([22.5, 82.0], 5);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(hotelMap);
    
    addHotelMarkers(accommodations);
}

function addHotelMarkers(hotels) {
    hotelMarkers.forEach(m => hotelMap.removeLayer(m));
    hotelMarkers = [];
    
    hotels.forEach(hotel => {
        const marker = L.marker([hotel.lat, hotel.lng]).addTo(hotelMap);
        
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background: #c9a227; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #0a0a0f; font-weight: bold; border: 2px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3);"><i class="fas fa-hotel"></i></div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        marker.setIcon(icon);
        
        const priceDisplay = hotel.priceValue > 7000 ? 'Rs Rs Rs' : hotel.priceValue > 4000 ? 'Rs Rs' : 'Rs';
        
        marker.bindPopup(`
            <div class="popup-content" style="min-width: 200px;">
                <h4 style="color: #c9a227; margin-bottom: 5px;">${hotel.name}</h4>
                <p style="font-size: 12px; margin-bottom: 3px;"><i class="fas fa-map-marker-alt"></i> ${hotel.location}</p>
                <p style="font-size: 12px; margin-bottom: 3px; font-weight: bold; color: #4ade80;">${priceDisplay}</p>
                <p style="font-size: 11px; color: #94a3b8;">${hotel.desc}</p>
            </div>
        `);
        
        marker.on('click', () => {
            filterByHotelLocation(hotel.location);
        });
        
        hotelMarkers.push(marker);
    });
    
    if (hotels.length > 0) {
        const bounds = L.latLngBounds(hotels.map(h => [h.lat, h.lng]));
        hotelMap.fitBounds(bounds, { padding: [50, 50] });
    }
}

function filterByHotelLocation(location) {
    const searchInput = document.getElementById('search-input');
    searchInput.value = location;
    filterAccommodations();
    
    document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth' });
}

function getAmenityIcon(amenity) {
    const icons = {
        'wifi': '<i class="fas fa-wifi"></i>',
        'restaurant': '<i class="fas fa-utensils"></i>',
        'pool': '<i class="fas fa-swimming-pool"></i>',
        'parking': '<i class="fas fa-parking"></i>',
        'spa': '<i class="fas fa-spa"></i>',
        'gym': '<i class="fas fa-dumbbell"></i>',
        'breakfast': '<i class="fas fa-coffee"></i>',
        'beach': '<i class="fas fa-umbrella-beach"></i>',
        'bar': '<i class="fas fa-glass-cheers"></i>',
        'safari': '<i class="fas fa-paw"></i>',
        'nature': '<i class="fas fa-tree"></i>',
        'boat': '<i class="fas fa-ship"></i>',
        'heritage': '<i class="fas fa-chess-rook"></i>',
        'ghat': '<i class="fas fa-water"></i>'
    };
    return icons[amenity] || '<i class="fas fa-check"></i>';
}

function getPriceIndicator(priceValue) {
    if (priceValue > 7000) return 'Rs Rs Rs';
    if (priceValue > 4000) return 'Rs Rs';
    return 'Rs';
}

function renderAccommodations(data) {
    const grid = document.getElementById('accommodations-grid');
    if (!grid) return;

    if (!data || data.length === 0) {
        grid.innerHTML = '<div class="no-results">No accommodations found. Try a different search or filter.</div>';
        return;
    }

    grid.innerHTML = data.map(acc => `
        <div class="accommodation-card" data-type="${acc.type}" data-location="${acc.location.toLowerCase()}">
            <div class="accommodation-image">
                <img src="${acc.image}" alt="${acc.name}">
            </div>
            <div class="accommodation-content">
                <h3>${acc.name}</h3>
                <div class="accommodation-location" style="cursor: pointer;" onclick="filterByHotelLocation('${acc.location}')">
                    <i class="fas fa-map-marker-alt"></i> ${acc.location}
                </div>
                <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 0.75rem;">${acc.desc}</p>
                <span class="type-badge ${acc.type}">${acc.type.charAt(0).toUpperCase() + acc.type.slice(1)}</span>
                <div class="price-indicator">${getPriceIndicator(acc.priceValue)}</div>
                <div class="rating"><i class="fas fa-star"></i> ${acc.rating}</div>
                <div class="amenities">${acc.amenities.map(a => getAmenityIcon(a)).join('')}</div>
                <button class="btn btn-primary" style="margin-top: 1rem; width: 100%;" onclick="showHotelOnMap(${acc.lat}, ${acc.lng}, '${acc.name}')">
                    <i class="fas fa-map-marker-alt"></i> View on Map
                </button>
            </div>
        </div>
    `).join('');
}

function showHotelOnMap(lat, lng, name) {
    hotelMap.setView([lat, lng], 16);
    
    hotelMarkers.forEach(m => hotelMap.removeLayer(m));
    hotelMarkers = [];
    
    const marker = L.marker([lat, lng]).addTo(hotelMap);
    
    const icon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background: #4ade80; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #0a0a0f; font-weight: bold; border: 3px solid white; box-shadow: 0 4px 20px rgba(74,222,128,0.5);"><i class="fas fa-map-pin"></i></div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });
    
    marker.setIcon(icon);
    marker.bindPopup(`<div class="popup-content"><h4>${name}</h4><p>Exact Location</p></div>`).openPopup();
    
    hotelMarkers.push(marker);
    
    document.querySelector('.map-section').scrollIntoView({ behavior: 'smooth' });
}

async function filterAccommodations() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput?.value.toLowerCase() || '';
    
    let filtered = accommodations.filter(acc => {
        const matchesSearch = acc.name.toLowerCase().includes(searchTerm) || 
                            acc.location.toLowerCase().includes(searchTerm);
        const matchesFilter = currentFilter === 'all' || 
                            (currentFilter === 'budget' && acc.priceValue < 3000) ||
                            (currentFilter === 'mid' && acc.priceValue >= 3000 && acc.priceValue < 8000) ||
                            (currentFilter === 'luxury' && acc.priceValue >= 8000);
        return matchesSearch && matchesFilter;
    });

    renderAccommodations(filtered);
    addHotelMarkers(filtered);
}

function setupAccommodationSearch() {
    const searchInput = document.getElementById('search-input');
    const filterPills = document.querySelectorAll('.filter-pill');

    renderAccommodations(accommodations);
    initHotelMap();

    if (searchInput) {
        searchInput.addEventListener('input', filterAccommodations);
    }

    if (filterPills.length > 0) {
        filterPills.forEach(pill => {
            pill.addEventListener('click', function() {
                filterPills.forEach(p => p.classList.remove('active'));
                this.classList.add('active');
                currentFilter = this.dataset.filter;
                filterAccommodations();
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', setupAccommodationSearch);
