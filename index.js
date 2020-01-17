async function find() {
    try{
        const search = document.querySelector('input').value
  const response = await fetch( 'https://api.giphy.com/v1/gifs/translate?api_key=1ciWQ3R3BbnLWyjnSWHUIKmeC1TMV1wH&s=' + search,{mode: 'cors'})
  const responseData = await response.json()
  console.log(responseData)
      imagee.src = (responseData.data.images.original.url)
    }
 catch(err){
     console.log(err)
 }
 }
const btn = document.querySelector('button')
btn.onclick = find