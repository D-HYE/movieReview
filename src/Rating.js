import React from 'react';

const RATINGS = [1, 2, 3, 4, 5]

function Star({selected=false, rating=0, onSelect, onHover}){
    const className = `rating-star ${selected?'selected':''}`
    const handleClick = onSelect?()=>onSelect(rating):undefined;
    const handleMouseOver = onHover?()=>onHover(rating):undefined;

    
    return(
        <span className={className} onClick={handleClick} onMouseOver={handleMouseOver}>★</span>
    )
}

export default function Rating({value=0, onSelect, onHover, onMouseOut}) {
  return (
    <div  onMouseOut={onMouseOut}>
        {RATINGS.map(num => <Star key={num} selected={value>=num} rating={num} onSelect={onSelect} onHover={onHover}/>)}
    </div>
  );
}
