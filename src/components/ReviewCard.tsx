'use client';

import React from 'react';
import { Card } from './ui/Card';
import { FiStar } from 'react-icons/fi';
import { Review } from '@/types';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="text-lg font-semibold text-black">{review.guest_name}</h4>
            {review.room_name && <p className="text-sm text-gold">{review.room_name}</p>}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                size={16}
                className={i < review.rating ? 'fill-gold text-gold' : 'text-light-gray'}
              />
            ))}
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">{review.comment}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-light-gray">
          <p className="text-xs text-gray-600">{new Date(review.created_at).toLocaleDateString()}</p>
          {review.verified && (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verified Guest</span>
          )}
        </div>
      </div>
    </Card>
  );
};
