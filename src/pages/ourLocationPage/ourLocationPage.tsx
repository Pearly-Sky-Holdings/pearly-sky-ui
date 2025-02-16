import { useState } from 'react';
import LocationCard from '../../components/Locations/LocationCart';


type Location = {
    id: string;
    name: string;
    flag: string;
    email?: string;
    address?: string;
    serviceCities?: string[];
};


function OurLocations() {
    const [expandedLocations, setExpandedLocations] = useState<string[]>([]);

    const locations: Location[] = [
        {
            id: 'france',
            name: 'France',
            flag: '🇫🇷',
            email: 'info@ventilationholdings.com',
            address: '15 Rue Des Halles, 75001 Paris',
            serviceCities: [
                'Paris', 'Nice', 'Saint-Tropez', 'Antibes', 'Cannes', 'Lyon',
                'Monaco', 'French Riviera', 'Rouen', 'Marseille'
            ]
        },
        {
            id: 'uk',
            name: 'United Kingdom',
            flag: '🇬🇧',
            email: 'uk@ventilationholdings.com',
            address: '10 Oxford Street, London',
            serviceCities: ['London', 'Manchester', 'Birmingham', 'Edinburgh']
        },
        {
            id: 'sl',
            name: 'Sri Lanka',
            flag: '🇱🇰',
            email: 'us@ventilationholdings.com',
            address: '350 Fifth Avenue, New York',
            serviceCities: ['New York', 'Los Angeles', 'Chicago', 'Miami']
        },
        {
            id: 'scotland',
            name: 'Scotland',
            flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
            email: 'info@ventilationholdings.com',
            address: '15 Rue Des Halles, 75001 Paris',
            serviceCities: [
                'Paris', 'Nice', 'Saint-Tropez', 'Antibes', 'Cannes', 'Lyon',
                'Monaco', 'French Riviera', 'Rouen', 'Marseille'
            ]
        },
        {
            id: 'germany',
            name: 'Germany',
            flag: '🇩🇪',
            email: 'uk@ventilationholdings.com',
            address: '10 Oxford Street, London',
            serviceCities: ['London', 'Manchester', 'Birmingham', 'Edinburgh']
        },
        {
            id: 'australia',
            name: 'Australia',
            flag: '🇦🇺',
            email: 'us@ventilationholdings.com',
            address: '350 Fifth Avenue, New York',
            serviceCities: ['New York', 'Los Angeles', 'Chicago', 'Miami']
        },
        {
            id: 'uae',
            name: 'United Arab Emirates',
            flag: '🇦🇪',
            email: 'info@ventilationholdings.com',
            address: '15 Rue Des Halles, 75001 Paris',
            serviceCities: [
                'Paris', 'Nice', 'Saint-Tropez', 'Antibes', 'Cannes', 'Lyon',
                'Monaco', 'French Riviera', 'Rouen', 'Marseille'
            ]
        },
        {
            id: 'canada',
            name: 'Canada',
            flag: '🇨🇦',
            email: 'uk@ventilationholdings.com',
            address: '10 Oxford Street, London',
            serviceCities: ['London', 'Manchester', 'Birmingham', 'Edinburgh']
        },
        {
            id: 'finland',
            name: 'Finland',
            flag: '🇫🇮',
            email: 'us@ventilationholdings.com',
            address: '350 Fifth Avenue, New York',
            serviceCities: ['New York', 'Los Angeles', 'Chicago', 'Miami']
        },
        {
            id: 'saudi-arabia',
            name: 'Saudi Arabia',
            flag: '🇸🇦',
            email: 'info@ventilationholdings.com',
            address: '15 Rue Des Halles, 75001 Paris',
            serviceCities: [
                'Paris', 'Nice', 'Saint-Tropez', 'Antibes', 'Cannes', 'Lyon',
                'Monaco', 'French Riviera', 'Rouen', 'Marseille'
            ]
        },
        {
            id: 'italy',
            name: 'Italy',
            flag: '🇮🇹',
            email: 'uk@ventilationholdings.com',
            address: '10 Oxford Street, London',
            serviceCities: ['London', 'Manchester', 'Birmingham', 'Edinburgh']
        },
        {
            id: 'potugal',
            name: 'Portugal',
            flag: '🇵🇹',
            email: 'us@ventilationholdings.com',
            address: '350 Fifth Avenue, New York',
            serviceCities: ['New York', 'Los Angeles', 'Chicago', 'Miami']
        },
        {
            id: 'us',
            name: 'United States',
            flag: '🇺🇸',
            email: 'info@ventilationholdings.com',
            address: '15 Rue Des Halles, 75001 Paris',
            serviceCities: [
                'Paris', 'Nice', 'Saint-Tropez', 'Antibes', 'Cannes', 'Lyon',
                'Monaco', 'French Riviera', 'Rouen', 'Marseille'
            ]
        },
        {
            id: 'ireland',
            name: 'Ireland',
            flag: '🇮🇪',
            email: 'uk@ventilationholdings.com',
            address: '10 Oxford Street, London',
            serviceCities: ['London', 'Manchester', 'Birmingham', 'Edinburgh']
        },
        {
            id: 'austria',
            name: 'Austria',
            flag: '🇦🇹',
            email: 'us@ventilationholdings.com',
            address: '350 Fifth Avenue, New York',
            serviceCities: ['New York', 'Los Angeles', 'Chicago', 'Miami']
        },
        {
            id: 'netherlands',
            name: 'Netherlands',
            flag: '🇳🇱',
            email: 'info@ventilationholdings.com',
            address: '15 Rue Des Halles, 75001 Paris',
            serviceCities: [
                'Paris', 'Nice', 'Saint-Tropez', 'Antibes', 'Cannes', 'Lyon',
                'Monaco', 'French Riviera', 'Rouen', 'Marseille'
            ]
        },
        {
            id: 'switzerland',
            name: 'Switzerland',
            flag: '🇨🇭',
            email: 'uk@ventilationholdings.com',
            address: '10 Oxford Street, London',
            serviceCities: ['London', 'Manchester', 'Birmingham', 'Edinburgh']
        },
        {
            id: 'qatar',
            name: 'Qatar',
            flag: '🇶🇦',
            email: 'us@ventilationholdings.com',
            address: '350 Fifth Avenue, New York',
            serviceCities: ['New York', 'Los Angeles', 'Chicago', 'Miami']
        },
        {
            id: 'denmark',
            name: 'Denmark',
            flag: '🇩🇰',
            email: 'info@ventilationholdings.com',
            address: '15 Rue Des Halles, 75001 Paris',
            serviceCities: [
                'Paris', 'Nice', 'Saint-Tropez', 'Antibes', 'Cannes', 'Lyon',
                'Monaco', 'French Riviera', 'Rouen', 'Marseille'
            ]
        },
        {
            id: 'new-zealand',
            name: 'New Zealand',
            flag: '🇳🇿',
            email: 'uk@ventilationholdings.com',
            address: '10 Oxford Street, London',
            serviceCities: ['London', 'Manchester', 'Birmingham', 'Edinburgh']
        },
        {
            id: 'poland',
            name: 'Poland',
            flag: '🇵🇱',
            email: 'us@ventilationholdings.com',
            address: '350 Fifth Avenue, New York',
            serviceCities: ['New York', 'Los Angeles', 'Chicago', 'Miami']
        },
        {
            id: 'luxembourg',
            name: 'Luxembourg',
            flag: '🇱🇺',
            email: 'info@ventilationholdings.com',
            address: '15 Rue Des Halles, 75001 Paris',
            serviceCities: [
                'Paris', 'Nice', 'Saint-Tropez', 'Antibes', 'Cannes', 'Lyon',
                'Monaco', 'French Riviera', 'Rouen', 'Marseille'
            ]
        },
    ];

    // Split locations into two halves
    const half = Math.ceil(locations.length / 2);
    const firstColumn = locations.slice(0, half);
    const secondColumn = locations.slice(half);

    const toggleLocation = (locationId: string) => {
        setExpandedLocations(prev =>
            prev.includes(locationId)
                ? prev.filter(id => id !== locationId)
                : [...prev, locationId]
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Our Locations
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First Column */}
                    <div className="space-y-4">
                        {firstColumn.map((location) => (
                            <LocationCard
                                key={location.id}
                                location={location}
                                isExpanded={expandedLocations.includes(location.id)}
                                toggleLocation={toggleLocation}
                            />
                        ))}
                    </div>

                    {/* Second Column */}
                    <div className="space-y-4">
                        {secondColumn.map((location) => (
                            <LocationCard
                                key={location.id}
                                location={location}
                                isExpanded={expandedLocations.includes(location.id)}
                                toggleLocation={toggleLocation}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurLocations;