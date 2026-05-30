'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { FiMapPin, FiUsers } from 'react-icons/fi';
import { Room } from '@/types';

interface RoomCardProps {
  room: Room;
  onClick?: () => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onClick }) => {
  return (
    <Card hover className="overflow-hidden cursor-pointer" onClick={onClick}>
      <div className="relative h-48 overflow-hidden bg-dark-gray">
        <img
          src={room.featured_image}
          alt={room.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <Badge className="absolute top-4 right-4 capitalize">{room.category}</Badge>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-black mb-2">{room.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-700">
          <div className="flex items-center gap-1">
            <FiUsers size={16} />
            <span>Up to {room.capacity} guests</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.slice(0, 3).map((amenity, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {amenity}
            </Badge>
          ))}
          {room.amenities.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{room.amenities.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex items-end justify-between pt-4 border-t border-light-gray">
          <div>
            <p className="text-2xl font-bold text-gold">${room.price_per_night}</p>
            <p className="text-xs text-gray-600">per night</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
