export async function getReviews(order = "createdAt"){
  const query = `order=${order}`
  const res = await fetch(`https://learn.codeit.kr/api/film-reviews?${query}`)
  const result = await res.json()
  return result
}

export async function createReviews(formData){
  const res = await fetch(`https://learn.codeit.kr/api/film-reviews`,{
    method: 'POST',
    body:formData
   })

   if(!res.ok){
     throw new Error('리뷰생성 실패')
   }

   const result = await res.json()
   return result
}