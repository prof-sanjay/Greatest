import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let arr=[19,15,7];
  let greatest=arr[0];
  for(let i=0;i<arr.length;i++){
    if(arr[i]>greatest){
      greatest=arr[i];
    }
  }

  return (
    <>
    <h1>{greatest}</h1>
    </>
  )
}

export default App
