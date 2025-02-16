import { MapPin, Mail } from 'lucide-react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type Location = {
    id: string;
    name: string;
    flag: string; // Assuming this is the image URL
    email?: string;
    address?: string;
    serviceCities?: string[];
};

function LocationCard({
    location,
    isExpanded,
    toggleLocation,
}: {
    location: Location;
    isExpanded: boolean;
    toggleLocation: (locationId: string) => void;
}) {
    return (
        <div>
            <div className={`rounded-lg p-2 border border-blue-700 ${isExpanded ? 'bg-blue-900' : 'bg-white'}`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        {/* Replace the span with an img tag for the flag */}
                        <img
                            src={location.flag}
                            alt={`${location.name} flag`}
                            className="w-8 h-8 rounded-full object-cover" // Rounded shape
                        />
                        <h2 className={`text-xl font-semibold ${isExpanded ? 'text-white' : 'text-blue-900'}`}>
                            {location.name}
                        </h2>
                    </div>
                    <div>
                        <div
                            onClick={() => toggleLocation(location.id)}
                            className="cursor-pointer"
                        >
                            {isExpanded ? <RemoveIcon className='text-white' /> : <AddIcon className='text-blue-900' />}
                        </div>
                    </div>
                </div>
            </div>

            {isExpanded && (
                <div className="mt-4 space-y-4">
                    {location.email && (
                        <div className="flex items-center space-x-2 text-gray-500">
                            <Mail size={24} />
                            <span>{location.email}</span>
                        </div>
                    )}
                    {location.address && (
                        <div className="flex items-center space-x-2 text-gray-500">
                            <MapPin size={24} />
                            <span>{location.address}</span>
                        </div>
                    )}
                    {location.serviceCities && (
                        <div>
                            <h3 className="text-lg font-semibold text-black">Service Cities</h3>
                            <div className="flex flex-wrap gap-2">
                                {location.serviceCities.map((city) => (
                                    <span
                                        key={city}
                                        className="px-3 py-1 bg-blue-400 text-white rounded-full text-sm"
                                    >
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default LocationCard;