import { useState, useEffect } from 'react';
import './App.css';
import items from './mock.json'
import {getReviews} from './fetch'
//default 가 있을 때는 중괄호 없이, 있을 때는 필요함
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

function App() {
  const [order, setorder] = useState();
  const [list, setlist] = useState([]);

  const sortItem = list.sort((a, b) => b[order] - a[order])
  //b-a역순(평점이 높은 순서대로, 최신순으로)
  const newList = () => {
    setorder('createdAt')
  }
  const bestList = () => {
    setorder('rating')
  }

  const onDelete = (targetId) => {
    const newDataList = list.filter(item => item.id !== targetId)
    setlist(newDataList)
  }

  const handleLoad = async(orderQuery) => {
    const {reviews} = await getReviews(orderQuery)
    setlist(reviews)
  }
  
  useEffect(() => {
    handleLoad(order)
  }, [order]);

  const handleSubmitSucess = (review) => {
    setlist(prevList => [review, ...prevList])
  }
  
  
  return (
    <div className="App">
      <ReviewForm onSubmitSucess={handleSubmitSucess}/>
      <button onClick={newList} className="order">최신순</button>
      <button onClick={bestList} className="order">평점순</button>
      <ReviewList items={sortItem} onDelete={onDelete}/>
    </div>
  );
}

export default App;
