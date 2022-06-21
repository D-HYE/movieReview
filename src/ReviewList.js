import React from 'react';
import ReviewItem from './ReviewItem';

export default function ReviewList({items, onDelete}) { 
  return (
    <div>
        <ul>
            {items.map(item =><li key={item.id}>
            <ReviewItem  item={item} onDelete={onDelete}/>
            <input/>
            </li>)}
        </ul>
    </div>
  );
}
