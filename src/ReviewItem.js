import React from 'react';
import Rating from './Rating';

export default function ReviewItem({item, onDelete}) {
    const formatData = (value) => {
      const date = new Date(value)
      return `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`
    }
    const deleteList = () => {
        onDelete(item.id)
        console.log(item.id);
    }

    return (
        <div className='movie'>
            <div className='imgbox'>
                <img src={item.imgUrl}/>
            </div>
            <div className='txtbox'>
                <h2>{item.title} <button onClick={deleteList}>삭제</button> </h2>
                <h4>{formatData(item.createdAt)}</h4>
                <Rating value={item.rating}/>
                <p>{item.content}</p>
            </div>
        </div>
    );
}
