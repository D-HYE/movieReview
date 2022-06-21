import React, { useState } from 'react';
import Rating from './Rating';

export default function RatingInput({name, value, onChange}) {
    const [rating, setrating] = useState(value);
    const handleSelect = (nextValue) => onChange(name, nextValue)
    const handleMouseOut = () => setrating(value)
  return (
    <Rating className='RatingInput' value={rating} onSelect={handleSelect} onHover={setrating} onMouseOut={handleMouseOut}/>
  );
}
