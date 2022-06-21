import React, { useState } from 'react';
import FileInput from './FileInput';
import RatingInput from './RatingInput';
import {createReviews} from './fetch'

const INITIAL_VALUES = {
  title : '',
  rating : 5,
  content : '',
  imgFile: null
}


export default function ReviewForm({onSubmitSucess}) {

    const [values, setvalues] = useState(INITIAL_VALUES);

    const handleChange = (name, value) => {
      
      setvalues(values => ({...values, [name]:value}))
    }

    const handleInputChange = (e) => {
      
      const {name, value} = e.target
      //setvalues({...values, [e.target.name]:e.target.value})
      //setvalues(prevValue => ({...prevValue, [name]:value}))
      handleChange(name, value)
    } 

    const handleSubmit = async (e) => {
      e.preventDefault()

      const formData = new FormData()
      formData.append('title',values.title)
      formData.append('rating',values.rating)
      formData.append('content',values.content)
      formData.append('imgFile',values.imgFile)
      let result;

      result = await createReviews(formData)
      const {review} = result
      setvalues(INITIAL_VALUES)
      onSubmitSucess(review)
    }
    
   
  return (
    <div className='ReviewForm' >
      <h2>영화 등록</h2>
      <form onSubmit={handleSubmit}>
        <div className="form" >
          <FileInput name='imgFile' value={values.imgFile} onChange={handleChange}/>
          <div class="txtbox1">
            <input type='text' placeholder='영화제목' name='title' value={values.title} onChange={handleInputChange}/>
            <RatingInput name='rating' value={values.rating} onChange={handleChange}/>
            <textarea placeholder='리뷰를 적어주세요' rows="10" name='content' vlaue={values.content} onChange={handleInputChange}/>
            <button type='submit'>등록</button>
          </div>
        </div>
      </form>
    </div>
  );
}
